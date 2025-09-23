import { date } from 'quasar'

const generalUtils = {
  notify(color, message, icon, $q) {
    $q.notify({
      message,
      color,
      icon,
      position: 'top-right',
      html: true,
      progress: true,
      timeout: 2000,
      multiLine: false,
      classes: 'text-weight-regular font-16'
    })
  },

  empty(data) {
    if (
      typeof data === 'undefined' ||
      data === null ||
      data === '' ||
      data === 'null' ||
      data === 'undefined'
    ) {
      return true
    }
    return false
  },

  showLoadingBox(message, $q) {
    $q.loading.show({
      message,
      boxClass: 'bg-white text-dark',
      spinnerColor: 'grey-4',
      spinnerSize: '30',
      html: true
    })
  },

  hideLoadingBox($q) {
    $q.loading.hide()
  },

  getDateString(payload) {
    return date.formatDate(payload, 'MMM DD, YYYY. hh:mm A')
  },

  getUserId() {
    return JSON.parse(localStorage.getItem('userInfo')).id
  }
}
export default generalUtils
