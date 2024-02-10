import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
    locale: 'en', // 设置默认语言
    messages: {
        en: {
            siteName: 'TikTok Matrix',
            devices: 'Devices',
            accounts: 'Accounts',
            materials: 'Materials',
            autoPublish: 'Auto Publishing',
            autoTrain: 'Auto Train',
            dialogWatcher: 'Dialog Watcher',
            version: 'Version',
            email: 'Email',
            password: 'Password',
            device: 'Device',
            disable: 'Disable',
            enable: 'Enable',
            add: 'Add',
            unbinded: 'Unbinded',
            update: 'Update',
            actions: 'Actions',
            delete: 'Delete',
            edit: 'Edit',
            execing: 'Execing',
            refresh: 'Refresh',
            installApk: 'Install APK',
            uninstallApk: 'Uninstall APK',
            menu: 'Menu',
            back: 'Back',
            home: 'Home',
            wakeup: 'Wakeup',
            sleep: 'Sleep',
            openTiktok: 'Open Tiktok',
            stopTiktok: 'Stop Tiktok',
            enableProxy: 'Enable Proxy',
            disableProxy: 'Disable Proxy',
            batchAction: 'Batch Action',
            total: 'Total',
            previous: 'Previous',
            next: 'Next',
            enterTips: 'Enter keywords',
            clearTiktok: 'Clear Tiktok',
            connecting: 'Connecting',
            autoScripts: 'Auto Scripts',
            register: 'Register',
            login: 'Login',
            uploadAvatar: 'Upload Avatar',
            keyboard: 'Keyboard',
            inputText: 'Input text to device',
            startTime: 'Start Time',
            endTime: 'End Time',
            material: 'Material',
            account: 'Account',
            waiting: 'Waiting',
            execing: 'Execing',
            success: 'Success',
            failed: 'Failed',
            status: 'Status',
            unused: 'Unused',
            used: 'Used',
            id: 'ID',
            demoTip: 'This is a demo site, the data is not real. If you want to experience the real data, please contact us: {email}',
            repair: 'Repair',
            groups: 'Groups',
            title: 'Title',
            name: 'Name',
            addAccount: 'Add Account',
            addMaterial: 'Add Material',
            group: 'Group',
            defaultGroup: 'Default Group',
            retry: 'Retry',
            preview: 'Preview',
            openAutoDateTime: 'Open Auto Date Time',
            closeAutoDateTime: 'Close Auto Date Time',
            connectWifi: 'Connect Wifi',
            disconnectWifi: 'Disconnect Wifi',
            torchOn: 'Torch On',
            torchOff: 'Torch Off',
            showSimInfo: 'Show Sim Info',
            openWhoer: 'Open Whoer',
            openNotification: 'Open Notification',
            reboot: 'Reboot',
            rebootAll: 'Reboot All',
            search: 'Search',
            shell: 'Shell',
            all: 'All',
            conditions: 'Conditions',
            action: 'Action',
            online: 'Online',
            offline: 'Offline',
            setTimezone: 'Set Timezone',
            selfMade: 'Self Made',
            aiMade: 'AI Made',
            publishType: 'Publish Type',
            productLink: 'Product Link',
            enterLicenseId: 'Enter License ID',
            infoCrawler: 'Info Crawler',
            username: 'Username',
            fans: 'Fans',
            shopCreator: 'Shop Creator',
            block: 'Block',
            earnings: 'Earnings',
            musics: 'Musics',
            releaseName: 'Release Name',
            artistName: 'Artist Name',
            connectionMode: 'Connection Mode',
            task_status: 'Task Status',
            settings: 'Settings',
            proxyServerTips: 'Is it necessary to batch use proxy server for mobile phones?',
            timezoneTips: 'Used for batch setting of time zone automatic script',
            wifiTips: 'Used for batch connecting wifi automatic script',
            emailTips: 'Customize the registration email suffix',
            openaiTips: 'Is it necessary to customize the username and nickname with AI',
            licenseTips: 'Enter the license key',
            save: 'Save',
            setProfile: 'Set Profile',
            avatars: 'Avatars',
            trainTimes: 'Train Times',
            publishTimes: 'Publish Times',
            trainJobs: 'Train Jobs',
            publishJobs: 'Publish Jobs',
            trainTimeTips: 'Train time, up to 6 time points can be configured',
            publishTimeTips: 'Publish time, up to 6 time points can be configured',
        },
        'zh-CN': {
            siteName: 'TikTok 矩阵',
            devices: '设备',
            accounts: '帐号',
            materials: '素材',
            autoPublish: '自动发布',
            autoTrain: '自动养号',
            dialogWatcher: '弹窗监控',
            version: '版本',
            email: '邮箱',
            password: '密码',
            device: '设备',
            disable: '禁用',
            enable: '启用',
            add: '添加',
            unbinded: '未绑定',
            update: '更新',
            actions: '操作',
            delete: '删除',
            edit: '编辑',
            execing: '执行中',
            refresh: '刷新',
            installApk: '安装 APK',
            uninstallApk: '卸载 APK',
            menu: '菜单',
            back: '返回',
            home: '主页',
            wakeup: '唤醒',
            sleep: '休眠',
            openTiktok: '打开 Tiktok',
            stopTiktok: '停止 Tiktok',
            enableProxy: '启用代理',
            disableProxy: '禁用代理',
            batchAction: '批量操作',
            total: '总数',
            previous: '上一页',
            next: '下一页',
            enterTips: '输入关键字',
            clearTiktok: '清除 Tiktok',
            connecting: '连接中',
            autoScripts: '自动脚本',
            register: '注册',
            login: '登录',
            uploadAvatar: '上传头像',
            keyboard: '键盘',
            inputText: '输入文本到设备',
            startTime: '开始时间',
            endTime: '结束时间',
            material: '素材',
            account: '帐号',
            waiting: '等待中',
            execing: '执行中',
            success: '成功',
            failed: '失败',
            status: '状态',
            unused: '未使用',
            used: '已使用',
            id: 'ID',
            demoTip: '这是一个演示站点，数据并不真实。如果您想体验真实数据，请联系我们：{email}',
            repair: '修复',
            groups: '分组',
            title: '标题',
            name: '名称',
            addAccount: '添加帐号',
            addMaterial: '添加素材',
            group: '分组',
            defaultGroup: '默认分组',
            retry: '重试',
            preview: '预览',
            openAutoDateTime: '打开自动日期时间',
            closeAutoDateTime: '关闭自动日期时间',
            connectWifi: '连接 Wifi',
            disconnectWifi: '断开 Wifi',
            torchOn: '打开手电筒',
            torchOff: '关闭手电筒',
            showSimInfo: '显示 Sim 信息',
            openWhoer: '打开 Whoer',
            openNotification: '打开通知',
            reboot: '重启',
            rebootAll: '重启所有设备',
            search: '搜索',
            shell: '终端',
            all: '全部',
            conditions: '条件',
            action: '动作',
            online: '在线',
            offline: '离线',
            setTimezone: '设置时区',
            selfMade: '自制',
            aiMade: 'AI 制作',
            publishType: '发布类型',
            productLink: '商品链接',
            enterLicenseId: '输入 License ID',
            infoCrawler: '信息采集',
            username: '用户名',
            fans: '粉丝',
            shopCreator: '创作者',
            block: '封禁',
            earnings: '收益',
            musics: '音乐',
            releaseName: '发行名称',
            artistName: '音乐名称',
            connectionMode: '连接模式',
            task_status: '任务状态',
            settings: '设置',
            proxyServerTips: '是否需要批量给手机使用代理服务器?',
            timezoneTips: '用于批量设置时区的自动脚本',
            wifiTips: '用于批量连接wifi的自动脚本',
            emailTips: '自定义注册邮箱后缀',
            openaiTips: '是否需要AI定制用户名和昵称',
            licenseTips: '输入授权码',
            save: '保存',
            setProfile: '设置资料',
            avatars: '头像',
            trainTimes: '养号时间',
            publishTimes: '发布时间',
            trainJobs: '养号任务',
            publishJobs: '发布任务',
            trainTimeTips: '养号时间，最多配置6个时间点',
            publishTimeTips: '发布时间，最多配置6个时间点',
        }
    }
})