<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="6" :sm="24">
            <a-form-item label="账号">
              <a-input placeholder="请输入"/>
            </a-form-item>
          </a-col>
		  <a-col :md="6" :sm="24">
            <a-form-item label="名称">
              <a-input placeholder="请输入"/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item label="状态">
              <a-select placeholder="请选择" default-value="0">
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">关闭</a-select-option>
                <a-select-option value="2">运行中</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <span class="table-page-search-submitButtons">
              <a-button type="primary">查询</a-button>
              <a-button style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <s-table
      size="default"
      :columns="columns"
      :data="loadData"
	  :rowKey='"id"'
    >
      <!-- <div
        slot="expandedRowRender"
        slot-scope="record"
        style="margin: 0">
        <a-row
          :gutter="24"
          :style="{ marginBottom: '12px' }">
          <a-col :span="12" v-for="(role, index) in record.permissions" :key="index" :style="{ marginBottom: '12px' }">
            <a-col :lg="4" :md="24">
              <span>{{ role.permissionName }}：</span>
            </a-col>
            <a-col :lg="20" :md="24" v-if="role.actionEntitySet.length > 0">
              <a-tag color="cyan" v-for="(action, k) in role.actionEntitySet" :key="k">{{ action.describe }}</a-tag>
            </a-col>
            <a-col :span="20" v-else>-</a-col>
          </a-col>
        </a-row>
      </div> -->
	  <span slot="status" slot-scope="text">{{ text | statusFilter }}</span>
      <span slot="action" slot-scope="text, record">
        <a @click="handleEdit(record)">编辑</a>
        <a-divider type="vertical" />
        <a-dropdown>
          <a class="ant-dropdown-link">
            更多 <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">详情</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">禁用</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">删除</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </span>
    </s-table>

    <a-modal
      title="操作"
      style="top: 20px;"
      :width="800"
      v-model="visible"
      @ok="handleOk"
    >
      <a-form>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="用户名称"
          hasFeedback
        >
          <a-input placeholder="用户名称" v-model="mdl.id" id="no" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="分配角色"
          hasFeedback
        >
		 <a-select v-model="mdl.roleId">
            <a-select-option value="superadmin">超级管理员</a-select-option>
            <a-select-option value="admin">管理员</a-select-option>
			<a-select-option value="user">普通用户</a-select-option>
        </a-select>
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="联系电话"
          hasFeedback
        >
          <a-input placeholder="联系电话" v-model="mdl.telephone" id="no" />
        </a-form-item>
		 <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="电子邮件"
          hasFeedback
        >
          <a-input placeholder="电子邮件" v-model="mdl.email" id="no" />
        </a-form-item>
        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="描述"
          hasFeedback
        >
          <a-textarea :rows="5" v-model="mdl.describe" placeholder="描述..." id="describe"/>
        </a-form-item>
        <!-- <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="拥有权限"
          hasFeedback
        >
          <a-row :gutter="16" v-for="(permission, index) in mdl.permissions" :key="index">
            <a-col :span="4">
              {{ permission.permissionName }}：
            </a-col>
            <a-col :span="20">
              <a-checkbox-group :options="permission.actionsOptions"/>
            </a-col>
          </a-row>

        </a-form-item> -->

      </a-form>
    </a-modal>

  </a-card>
</template>

<script>
import { STable } from '@/components'
import { getUserList, getServiceList } from '@/api/manage'

export default {
  name: 'TableList',
  components: {
    STable
  },
  data () {
    return {
      description: '列表使用场景：后台管理中的权限管理以及角色管理，可用于基于 RBAC 设计的角色权限控制，颗粒度细到每一个操作类型。',

      visible: false,
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      },
      form: null,
      mdl: {},

      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
	  // 表头
      columns: [
        {
          title: '用户账号',
          dataIndex: 'username'
        },
        {
          title: '用户名称',
          dataIndex: 'name'
        },
        {
          title: '用户状态',
		  dataIndex: 'status',
		  scopedSlots: { customRender: 'status' }
		},
		{
          title: '所属角色',
          dataIndex: 'roleName'
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          sorter: true
        }, 
		{
          title: '最后登录时间',
          dataIndex: 'lastLoginTime',
          sorter: true
        },{
          title: '操作',
          width: '150px',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        return getUserList(parameter)
          .then(res => {
            console.log('getRoleList', res)
            return res.result
          })
      },

      selectedRowKeys: [],
      selectedRows: []
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: '正常',
        2: '禁用'
      }
      return statusMap[status]
    }
  },
  created () {
    // getServiceList().then(res => {
    //   console.log('getServiceList.call()', res)
    // })

    // getRoleList().then(res => {
    //   console.log('getRoleList.call()', res)
    // })
  },
  methods: {
    handleEdit (record) {
      this.mdl = Object.assign({}, record)

    //   this.mdl.permissions.forEach(permission => {
    //     permission.actionsOptions = permission.actionEntitySet.map(action => {
    //       return { label: action.describe, value: action.action, defaultCheck: action.defaultCheck }
    //     })
    //   })

      this.visible = true
    },
    handleOk () {

    },
    onChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    }
  },
  watch: {
    /*
      'selectedRows': function (selectedRows) {
        this.needTotalList = this.needTotalList.map(item => {
          return {
            ...item,
            total: selectedRows.reduce( (sum, val) => {
              return sum + val[item.dataIndex]
            }, 0)
          }
        })
      }
      */
  }
}
</script>
