import { shallowMount } from '@vue/test-utils'
import FolderCard from '@/components/FolderCard.vue'

describe('FolderCard.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(FolderCard, {
      propsData: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
