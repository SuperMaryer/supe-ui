<template>
<div class="s-content-section">
  <div class="s-content-section-title">
    <slot name="title">
      <div>{{title}}</div>
    </slot>
  </div>
  <ul class="s-content-section-container">
      <li class="s-content-section-condition" v-for="(item,index) in data" :key="index">
          <!-- 模块名称 -->
          <span
            class="s-content-section-condition-index"
            :class="namePlacement"
          >
            <slot name="name"><span>{{ name }}</span></slot><span v-if="nameIndex">{{ index+1 }}</span>
          </span>

          <span class="s-content-section-condition-icon-box" :class="iconPlacement">
              <!-- 新增图标 -->
              <span class="s-content-section-condition-icon"
                  v-if="!disabled"
                  @click="sectionAction('add', index)">
                  <span :class="addIcon">+</span>
              </span>
              <!-- 删除图标 -->
              <span class="s-content-section-condition-icon"
                  v-if="!disabled && data.length>1"
                  @click="sectionAction('del',index)">
                  <span :class="delIcon">-</span>
              </span>
          </span>
          <slot :node="item"></slot>
      </li>
  </ul>
  <slot name="footer"></slot>
</div>
</template>

<script>
export default {
  name: 'SupeContentSection',
	props: {
		data: {
			type: Array,
			default: () => {
        return []
      }
		},
    // 新增一项时默认增加的data
		defaultItemData: {
			type: Object,
			default: () => {
        return {}
      }
		},
    // 整体title
    title: {
      type: String,
      default: ''
    },
    // 模块title是否显示index
    nameIndex: {
      type: Boolean,
      default: true
    },
    // 模块title
    name: {
      type: String,
      default: '模块'
    },
    // 模块title位置
    namePlacement: {
      type: String,
      default: 'top-start'
    },
    // 增加删除icon位置
    iconPlacement: {
      type: String,
      default: 'top-end'
    },
    // 新增模块icon名，可传项目支持的图标类名
    addIcon: {
      type: String,
      default: ''
    },
    // 删除模块icon名，可传项目支持的图标类名
    delIcon: {
      type: String,
      default: ''
    },
    // 是否可新增/删除模块操作
    disabled: {
      type: Boolean,
      default: false
    },
	},
  methods: {
     // 模块操作
    sectionAction(type, index) {
      if (type === 'add') {
        this.data.splice(index+1, 0, JSON.parse(JSON.stringify(this.defaultItemData)))
        this.$emit('addAction', index+1, this.data)
      } else if (type === 'del') {
        this.data.splice(index, 1);
        this.$emit('deleteAction', this.data)
      }
    },
  }
}
</script><style lang="sass" scoped>
@import './content-section.scss';
</style>
