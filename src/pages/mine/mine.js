import wxUtil from '../../utils/wxUtil'

Page({
  handleBasicEdit() {
    wxUtil.navigateTo('edit', { type: 'basic' })
  },
  handleEducationAdd() {
    wxUtil.navigateTo('edit', { type: 'education' })
  },
  handleJobAdd() {
    wxUtil.navigateTo('edit', { type: 'job' })
  }
})
