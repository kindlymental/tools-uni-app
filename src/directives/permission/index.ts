import type { Directive } from 'vue'

export const permission: Directive = {
  mounted(el, binding) {
    let permi = binding.value
    if (!permi) return
    let permissionList = [{ key: 'vip' }, { key: 'super-vip' }]
    if (!permissionList.some((item) => item.key === permi)) {
      // 对没有权限的dom 进行 remove
      return el.parentNode.removeChild(el)
    }
    return
  },
}
