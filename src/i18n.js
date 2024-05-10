import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
  locale: 'en', // 设置默认语言
  messages: {
    en: {
      siteName: 'Tik Matrix',
      devices: 'Devices',
      accounts: 'Accounts',
      materials: 'Videos',
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
      register: 'Reg',
      login: 'Login',
      uploadAvatar: 'Upload Avatar',
      keyboard: 'Keyboard',
      inputText: 'Input text to device',
      startTime: 'Start Time',
      endTime: 'End Time',
      material: 'Material',
      account: 'Account',
      waiting: 'Waiting',
      success: 'Success',
      failed: 'Failed',
      status: 'Status',
      unused: 'Unused',
      used: 'Used',
      id: 'ID',
      demoTip: 'This is a demo site, the data is not real. If you want to experience the real data, please contact us: {email}',
      demoTip2: 'Join Telegram Group',
      repair: 'Repair',
      groups: 'Groups',
      titles: 'Titles',
      name: 'Name',
      addAccount: 'Add Account',
      addMaterial: 'Add Videos',
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
      passwordTips: 'Enter the password',
      save: 'Save',
      setProfile: 'Set Profile',
      avatars: 'Avatars',
      trainTimer: 'Train Timer',
      publishTimer: 'Publish Timer',
      trainJobs: 'Train Jobs',
      publishJobs: 'Publish Jobs',
      trainTimeTips: 'Train timer, up to 6 timer can be configured',
      publishTimeTips: 'Publish timer, up to 6 timer can be configured',
      dashboard: 'Dashboard',
      allGroups: 'All Groups',
      overview: 'Overview',
      deviceCount: 'Device Count',
      trainJobCount: 'TrainJob Count',
      publishJobCount: 'PublishJob Count',
      trainJobQueue: 'TrainJob Queue',
      publishJobQueue: 'PublishJob Queue',
      matrixGroup: 'Matrix Group',
      accountCount: 'Account Count',
      retryAllFaied: 'Retry All Failed',
      like: 'Like',
      floow: 'Floow',
      collect: 'Collect',
      interact: 'Interact',
      logs: 'Logs',
      quickOperation: 'Quick Operation',
      postUrl: 'Post Url',
      topicCount: 'Topic Count',
      commentCount: 'Comment Count',
      commentJobCount: 'CommentJob Count',
      commentJobQueue: 'CommentJob Queue',
      clearAll: 'Clear All',
      comments: 'Comments',
      registerAll: 'Register All',
      proxys: 'Proxys',
      server: 'Server',
      port: 'Port',
      test: 'Test',
      init: 'Init',
      resetSize: 'Reset Size',
      resetDensity: 'Reset Density',
      showTimeSetting: 'Show Time Setting',
      uploadVideo: 'Upload Video',
      input_output: 'Input&Output',
      trainDuration: 'Train Duration',
      minute: 'Minute',
      clearNotification: 'Clear Notification',
      showAll: 'Show All',
      allStatus: 'All Status',
      analytics: 'Analytics',
      day_hour: 'Day Hour',
      follower_count: 'Followers',
      video_count: 'Videos',
      video_collect_count: 'Collects',
      video_comment_count: 'Comments',
      video_like_count: 'Likes',
      video_play_count: 'Views',
      video_share_count: 'Shares',
      postBots: 'Post Bots',
      editBots: 'Edit Bots',
      user: 'User',
      host: 'Host',
      edit_bot: 'Edit Bot',
      post_bot: 'Post Bot',
      multilogin: 'Multilogin',
      start: 'Start',
      stop: 'Stop',
      download_video: 'Download Video',
      upload_background: 'Upload Background',
      upload_overlay: 'Upload Overlay',
      clear_background: 'Clear Background',
      clear_overlay: 'Clear Overlay',
      background: 'Background',
      overlay: 'Overlay',
      start_bot: 'Start Bot',
      stop_bot: 'Stop Bot',
      videos: 'Videos',
      running: 'Running',
      stopped: 'Stopped',
      clearTasks: 'Clear Tasks',
      startAll: 'Start All',
      stopAll: 'Stop All',
      initAll: 'Init All',
      bot: 'Bot',
      upload: 'Upload',
      download: 'Download',
      ipinfo: 'IP Info',
      finished: 'Finished',
      clear: 'Clear',
      unlock: 'Unlock',
      showLanguageSetting: 'Show Language Setting',
      matchAccount: 'Match Account',
      setInputMethod: 'Set Input Method',
      enableTCP: 'Enable TCP',
      readClipboard: 'Read Clipboard',
      train: 'Train',
      copy: 'Copy',
      topics: 'Topics',
      topicsTips: 'Enter the topic to be searched,one topic per line',
      titlesTips: 'Enter the title and tags of the video,one title per line',
      remark: 'Remark',
      document: 'Document',
      selected: 'Selected',
      selectAll: 'Select All',
      open: 'Open',
      close: 'Close',
      proxy: 'Proxy',
      power: 'Power',
      reboot: 'Reboot',
      up: 'Up',
      down: 'Down',
      right: 'Right',
      left: 'Left',
      time: 'Time',
      language: 'Lang',
      sim: 'SIM',
      input: 'Input',
      tcp: 'TCP',
      enter: 'Enter',
      successRate: 'Success Rate',
      isRunning: 'Is Running',
      task: 'Task',
      RUNNING: 'Running',
      IDLE: 'Idle',
      hideTips: 'Hide this device',
      showHiddenDevices: 'Show hidden devices',
      installAPK: 'Install APK',
      apk: 'APK',
      enableTCP: 'Enable ADB TCP Connection',
      match: 'Match',
      matchAccount: 'Match Account',
      post: 'Post',
      copySuccess: 'Copy Success',
      initStart: 'Init Start,It will take about 10 seconds',
      initSuccess: 'Init Success',
      units: 'Units',
      allDevices: 'All Devices',
      addGroup: 'Add Group',
      general: 'General',
      toolbox: 'Toolbox',
      moveToGroup: 'Move To Group',
      noDevicesSelected: 'No Devices Selected',
      uid: 'UID',
      proxyServer: 'Proxy Server',
      license: 'License',
      emailSuffix: 'Email Suffix',
      registerSettings: 'Register Settings',
      nicknames: 'Nicknames',
      nicknamesTips: 'Enter the nickname, one nickname per line',
      usernames: 'Usernames',
      usernamesTips: 'Enter the username, one username per line',
      bios: 'Bios',
      biosTips: 'Enter the signature, one signature per line',
      avatarsPath: 'Avatars Path',
      profile: 'Profile',
      profileTips: 'Setup Profile',
      proxys: 'Proxys',
    },
    'zh-CN': {
      siteName: 'Tik Matrix',
      devices: '设备',
      accounts: '帐号',
      materials: '视频',
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
      material: '视频',
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
      demoTip2: '加入 Telegram 群组',
      repair: '修复',
      groups: '分组',
      titles: '标题',
      name: '名称',
      addAccount: '添加帐号',
      addMaterial: '添加视频',
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
      dashboard: '仪表盘',
      allGroups: '全部分组',
      quickStart: '快速开始',
      overview: '概览',
      deviceCount: '设备数量',
      accountCount: '帐号数量',
      trainJobCount: '养号任务数量',
      publishJobCount: '发布任务数量',
      trainJobQueue: '养号任务队列',
      publishJobQueue: '发布任务队列',
      matrixGroup: '矩阵分组',
      retryAllFaied: '重试所有失败',
      like: '点赞',
      floow: '关注',
      collect: '收藏',
      interact: '互动',
      logs: '日志',
      quickOperation: '快速操作',
      commentCount: '评论数量',
      commentJobCount: '评论任务数量',
      commentJobQueue: '评论任务队列',
      document: '文档',
      selected: '已选择',
      selectAll: '全选',
      showAll: '显示全部',
      open: '开启',
      stop: '停止',
      close: '关闭',
      clear: '清空',
      proxy: '代理',
      train: '养号',
      power: '电源',
      reboot: '重启',
      up: '上滑',
      down: '下滑',
      left: '左滑',
      right: '右滑',
      time: '时间',
      language: '语言',
      sim: 'SIM',
      upload: '上传',
      input: '输入',
      tcp: 'TCP',
      enter: '输入',
      successRate: '成功率',
      isRunning: '运行中',
      task: '任务',
      RUNNING: '运行中',
      IDLE: '空闲',
      remark: '备注',
      trainTimer: '养号定时器',
      trainDuration: '养号时长',
      topics: '话题',
      publishTimer: '发布定时器',
      topicsTips: '输入要搜索的话题,一行一个话题',
      titlesTips: '输入视频的标题和标签,一行一个标题',
      hideTips: '隐藏这个设备',
      showHiddenDevices: '显示隐藏设备',
      installAPK: '安装 APK',
      apk: 'APK',
      init: '初始化',
      enableTCP: '启用 ADB TCP 连接',
      match: '匹配',
      matchAccount: '匹配账号',
      post: '发布',
      copySuccess: '复制成功',
      copy: '复制',
      initStart: '初始化开始,大概需要10秒钟',
      initSuccess: '初始化成功',
      units: '台',
      allDevices: '全部设备',
      addGroup: '新增分组',
      general: '常用设置',
      toolbox: '工具箱',
      clearAll: '清空所有',
      allStatus: '全部状态',
      moveToGroup: '移动到分组',
      noDevicesSelected: '未选择设备',
      showTimeSetting: '显示时间设置',
      showLanguageSetting: '显示语言设置',
      uid: 'UID',
      proxyServer: '代理服务器',
      license: '授权码',
      emailSuffix: '邮箱后缀',
      registerSettings: '注册设置',
      nicknames: '昵称',
      nicknamesTips: '输入昵称,一行一个昵称',
      usernames: '用户名',
      usernamesTips: '输入用户名,一行一个用户名',
      bios: '签名',
      biosTips: '输入签名,一行一个签名',
      avatarsPath: '头像路径',
      profile: '资料',
      profileTips: '设置个人资料',
      proxys: '代理',
    }
  }
})
