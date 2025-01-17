import Mock from 'mockjs2'
import { builder } from '../util'

const orgTree = () => {
	return builder([{
		'key': 'key-01',
		'title': '研发中心',
		'icon': 'mail',
		'children': [{
			'key': 'key-01-01',
			'title': '后端组',
			'icon': null,
			'group': true,
			children: [{
				'key': 'key-01-01-01',
				'title': 'JAVA',
				'icon': null
			},
			{
				'key': 'key-01-01-02',
				'title': 'PHP',
				'icon': null
			},
			{
				'key': 'key-01-01-03',
				'title': 'Golang',
				'icon': null
			}
			]
		}, {
			'key': 'key-01-02',
			'title': '前端组',
			'icon': null,
			'group': true,
			children: [{
				'key': 'key-01-02-01',
				'title': 'React',
				'icon': null
			},
			{
				'key': 'key-01-02-02',
				'title': 'Vue',
				'icon': null
			},
			{
				'key': 'key-01-02-03',
				'title': 'Angular',
				'icon': null
			}
			]
		}]
	}, {
		'key': 'key-02',
		'title': '财务部',
		'icon': 'dollar',
		'children': [{
			'key': 'key-02-01',
			'title': '会计核算',
			'icon': null
		}, {
			'key': 'key-02-02',
			'title': '成本控制',
			'icon': null
		}, {
			'key': 'key-02-03',
			'title': '内部控制',
			'icon': null,
			'children': [{
				'key': 'key-02-03-01',
				'title': '财务制度建设',
				'icon': null
			},
			{
				'key': 'key-02-03-02',
				'title': '会计核算',
				'icon': null
			}
			]
		}]
	}])
}

const role = () => {
	return builder({
		'data': [{
			'id': 'superadmin',
			'name': '超级管理员',
			'describe': '这是超级管理员角色',
			'status': 1,
			'creatorId': 'system',
			'createTime': 1497160610259,
			'deleted': 0,
			'permissions': [{
				'roleId': 'admin',
				'permissionId': 'comment',
				'permissionName': '评论管理',
				'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
				'actionEntitySet': [{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'query',
					'describe': '查询',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				},
				{
					'action': 'delete',
					'describe': '删除',
					'defaultCheck': false
				}
				],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'admin',
				'permissionId': 'member',
				'permissionName': '会员管理',
				'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
				'actionEntitySet': [{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'query',
					'describe': '查询',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				},
				{
					'action': 'delete',
					'describe': '删除',
					'defaultCheck': false
				}
				],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'admin',
				'permissionId': 'menu',
				'permissionName': '菜单管理',
				'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"}]',
				'actionEntitySet': [{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'import',
					'describe': '导入',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				}
				],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'admin',
				'permissionId': 'order',
				'permissionName': '订单管理',
				'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
				'actionEntitySet': [{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'query',
					'describe': '查询',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				},
				{
					'action': 'delete',
					'describe': '删除',
					'defaultCheck': false
				}
				],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'admin',
				'permissionId': 'permission',
				'permissionName': '权限管理',
				'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
				'actionEntitySet': [{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				},
				{
					'action': 'delete',
					'describe': '删除',
					'defaultCheck': false
				}
				],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'admin',
				'permissionId': 'role',
				'permissionName': '角色管理',
				'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
				'actionEntitySet': [{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				},
				{
					'action': 'delete',
					'describe': '删除',
					'defaultCheck': false
				}
				],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'admin',
				'permissionId': 'test',
				'permissionName': '测试权限',
				'actions': '[]',
				'actionEntitySet': [],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'admin',
				'permissionId': 'user',
				'permissionName': '用户管理',
				'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
				'actionEntitySet': [{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'import',
					'describe': '导入',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				},
				{
					'action': 'delete',
					'describe': '删除',
					'defaultCheck': false
				},
				{
					'action': 'export',
					'describe': '导出',
					'defaultCheck': false
				}
				],
				'actionList': null,
				'dataAccess': null
			}
			]
		},
		{
			'id': 'admin',
			'name': '管理员',
			'describe': '这是管理员角色',
			'status': 1,
			'creatorId': 'super',
			'createTime': 1532417744846,
			'deleted': 0,
			'permissions': [{
				'roleId': 'admin',
				'permissionId': 'comment',
				'permissionName': '评论管理',
				'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
				'actionEntitySet': [{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'query',
					'describe': '查询',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				},
				{
					'action': 'delete',
					'describe': '删除',
					'defaultCheck': false
				}
				],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'admin',
				'permissionId': 'member',
				'permissionName': '会员管理',
				'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
				'actionEntitySet': [{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'query',
					'describe': '查询',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				}
				],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'admin',
				'permissionId': 'menu',
				'permissionName': '菜单管理',
				'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"}]',
				'actionEntitySet': [{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'import',
					'describe': '导入',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				}
				],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'admin',
				'permissionId': 'order',
				'permissionName': '订单管理',
				'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
				'actionEntitySet': [{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'query',
					'describe': '查询',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				}
				],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'admin',
				'permissionId': 'permission',
				'permissionName': '权限管理',
				'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
				'actionEntitySet': [{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				}
				],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'admin',
				'permissionId': 'role',
				'permissionName': '角色管理',
				'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
				'actionEntitySet': [{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				},
				{
					'action': 'delete',
					'describe': '删除',
					'defaultCheck': false
				}
				],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'admin',
				'permissionId': 'test',
				'permissionName': '测试权限',
				'actions': '[]',
				'actionEntitySet': [],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'admin',
				'permissionId': 'user',
				'permissionName': '用户管理',
				'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
				'actionEntitySet': [{
					'action': 'add',
					'describe': '新增',
					'defaultCheck': false
				},
				{
					'action': 'import',
					'describe': '导入',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				},
				{
					'action': 'update',
					'describe': '修改',
					'defaultCheck': false
				}
				],
				'actionList': null,
				'dataAccess': null
			}
			]
		},
		{
			'id': 'user',
			'name': '普通会员',
			'describe': '普通用户，只能查询',
			'status': 1,
			'creatorId': 'system',
			'createTime': 1497160610259,
			'deleted': 0,
			'permissions': [{
				'roleId': 'user',
				'permissionId': 'comment',
				'permissionName': '评论管理',
				'actions': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
				'actionEntitySet': [{
					'action': 'query',
					'describe': '查询',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				}
				],
				'actionList': null,
				'dataAccess': null
			},

			{
				'roleId': 'user',
				'permissionId': 'marketing',
				'permissionName': '营销管理',
				'actions': '[]',
				'actionEntitySet': [],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'user',
				'permissionId': 'member',
				'permissionName': '会员管理',
				'actions': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
				'actionEntitySet': [{
					'action': 'query',
					'describe': '查询',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				}
				],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'user',
				'permissionId': 'menu',
				'permissionName': '菜单管理',
				'actions': '[]',
				'actionEntitySet': [],
				'actionList': null,
				'dataAccess': null
			},

			{
				'roleId': 'user',
				'permissionId': 'order',
				'permissionName': '订单管理',
				'actions': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
				'actionEntitySet': [{
					'action': 'query',
					'describe': '查询',
					'defaultCheck': false
				},
				{
					'action': 'get',
					'describe': '详情',
					'defaultCheck': false
				}
				],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'user',
				'permissionId': 'permission',
				'permissionName': '权限管理',
				'actions': '[]',
				'actionEntitySet': [],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'user',
				'permissionId': 'role',
				'permissionName': '角色管理',
				'actions': '[]',
				'actionEntitySet': [],
				'actionList': null,
				'dataAccess': null
			},

			{
				'roleId': 'user',
				'permissionId': 'test',
				'permissionName': '测试权限',
				'actions': '[]',
				'actionEntitySet': [],
				'actionList': null,
				'dataAccess': null
			},
			{
				'roleId': 'user',
				'permissionId': 'user',
				'permissionName': '用户管理',
				'actions': '[]',
				'actionEntitySet': [],
				'actionList': null,
				'dataAccess': null
			}
			]
		}
		],
		'pageSize': 10,
		'pageNo': 0,
		'totalPage': 1,
		'totalCount': 5
	})
}
const user = () => {
	return builder({
		'pageSize': 10,
		'pageNo': 0,
		'totalPage': 1,
		'totalCount': 3,
		'data': [{
			'id': '111',
			'name': '老板',
			'username': 'super',
			'avatar': '/avatar2.jpg',
			'status': '1',
			'telephone': '13988888888',
			'lastLoginIp': '27.154.74.117',
			'lastLoginTime': 1534837621348,
			'creatorId': 'system',
			'createTime': 1497160610259,
			'email': '123@qq.com',
			'deleted': 0,
			'roleId': 'superadmin',
			'roleName':'超级管理员'
		},
		{
			'id': '222',
			'name': '主管',
			'username': 'admin',
			'avatar': '/avatar2.jpg',
			'status': '1',
			'telephone': '13988888888',
			'lastLoginIp': '27.154.74.117',
			'lastLoginTime': 1534837621348,
			'creatorId': 'super',
			'createTime': 1497160610259,
			'email': '123@qq.com',
			'deleted': 0,
			'roleId': 'admin',
			'roleName':'管理员'
		},
		{
			'id': '333',
			'name': '用户名1',
			'username': 'lzw1',
			'avatar': '/avatar2.jpg',
			'status': '1',
			'telephone': '13988888888',
			'lastLoginIp': '27.154.74.117',
			'lastLoginTime': 1534837621348,
			'creatorId': 'super',
			'createTime': 1497160610259,
			'email': '123@qq.com',
			'deleted': 0,
			'roleId': 'user',
			'roleName':'普通用户'
		},
		{
			'id': '444',
			'name': '用户名2',
			'username': 'lzw2',
			'avatar': '/avatar2.jpg',
			'status': '2',
			'telephone': '13988888888',
			'lastLoginIp': '27.154.74.117',
			'lastLoginTime': 1534837621348,
			'creatorId': 'super',
			'createTime': 1497160610259,
			'email': '123@qq.com',
			'deleted': 0,
			'roleId': 'user',
			'roleName':'普通用户'
		}]
	})
}
const permissionNoPager = () => {
	return builder([{
		'id': 'marketing',
		'name': '营销管理',
		'describe': null,
		'status': 1,
		'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
		'sptDaTypes': null,
		'optionalFields': null,
		'parents': null,
		'type': null,
		'deleted': 0,
		'actions': [
			'add',
			'query',
			'get',
			'update',
			'delete'
		]
	},
	{
		'id': 'member',
		'name': '会员管理',
		'describe': null,
		'status': 1,
		'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
		'sptDaTypes': null,
		'optionalFields': '[]',
		'parents': null,
		'type': 'default',
		'deleted': 0,
		'actions': [
			'add',
			'query',
			'get',
			'update',
			'delete'
		]
	},
	{
		'id': 'menu',
		'name': '菜单管理',
		'describe': null,
		'status': 1,
		'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"}]',
		'sptDaTypes': null,
		'optionalFields': '[]',
		'parents': null,
		'type': 'default',
		'deleted': 0,
		'actions': [
			'add',
			'import',
			'get',
			'update'
		]
	},
	{
		'id': 'order',
		'name': '订单管理',
		'describe': null,
		'status': 1,
		'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
		'sptDaTypes': null,
		'optionalFields': '[]',
		'parents': null,
		'type': 'default',
		'deleted': 0,
		'actions': [
			'add',
			'query',
			'get',
			'update',
			'delete'
		]
	},
	{
		'id': 'permission',
		'name': '权限管理',
		'describe': null,
		'status': 1,
		'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
		'sptDaTypes': null,
		'optionalFields': '[]',
		'parents': null,
		'type': 'default',
		'deleted': 0,
		'actions': [
			'add',
			'get',
			'update',
			'delete'
		]
	},
	{
		'id': 'role',
		'name': '角色管理',
		'describe': null,
		'status': 1,
		'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
		'sptDaTypes': null,
		'optionalFields': '[]',
		'parents': null,
		'type': 'default',
		'deleted': 0,
		'actions': [
			'add',
			'get',
			'update',
			'delete'
		]
	},
	{
		'id': 'test',
		'name': '测试权限',
		'describe': null,
		'status': 1,
		'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
		'sptDaTypes': null,
		'optionalFields': '[]',
		'parents': null,
		'type': 'default',
		'deleted': 0,
		'actions': [
			'add',
			'get'
		]
	},
	{
		'id': 'user',
		'name': '用户管理',
		'describe': null,
		'status': 1,
		'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
		'sptDaTypes': null,
		'optionalFields': '[]',
		'parents': null,
		'type': 'default',
		'deleted': 0,
		'actions': [
			'add',
			'get'
		]
	}
	])
}

const permissions = () => {
	return builder({
		'data': [{
			'key': 1,
			'id': 'system',
			'name': '系统管理',
			'describe': null,
			'status': 1,
			'actionData': '',
			'sptDaTypes': null,
			'optionalFields': null,
			'parents': null,
			'type': null,
			'deleted': 0,
			'actions': [
				'add',
				'query',
				'get',
				'update',
				'delete'
			],
			'children': [{
				'key': 11,
				'id': 'user',
				'name': '用户管理',
				'describe': null,
				'status': 1,
				'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"add","defaultCheck":false,"describe":"新增"}]',
				'sptDaTypes': null,
				'optionalFields': null,
				'parents': 'marketing11',
				'type': 'default',
				'deleted': 0,
				'actions': [
					'add',
					'query',
				]
			}, {
				'key': 12,
				'id': 'roles',
				'name': '角色管理',
				'describe': null,
				'status': 1,
				'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
				'sptDaTypes': null,
				'optionalFields': '[]',
				'parents': null,
				'type': 'default',
				'deleted': 0,
				'actions': [
					'add',
					'query',
					'get',
					'update',
					'delete'
				]
			}
			]
		},

		]
	})
}

Mock.mock(/\/org\/tree/, 'get', orgTree)
Mock.mock(/\/role/, 'get', role)
Mock.mock(/\/user/, 'get', user)
Mock.mock(/\/permission\/no-pager/, 'get', permissionNoPager)
Mock.mock(/\/permission/, 'get', permissions)
