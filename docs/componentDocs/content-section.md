# ContentSection
模块框组件

### 基础示例
<div class="view-content-section flex-wrap">
  <content-section
    :data="listData7"
    @addAction="addAction"
    @deleteAction="deleteAction"
  >
    <div class="test-box">
      <p>slot用法：title-slot</p>
      <p>slot用法：name-slot</p>
      <p>slot用法：footer-slot</p>
    </div>
    <div slot="title" class="title-slot">title-slot</div>
    <span slot="name">name-slot</span>
    <div slot="footer" class="footer-slot">footer-slot</div>
  </content-section>
  <content-section
    :data="listData8"
    :disabled="true"
    @addAction="addAction"
    @deleteAction="deleteAction"
  >
    <div class="test-box">disabled用法：disabled：true =》禁用模块框操作：true</div>
    <div slot="title" class="title-slot">title-slot</div>
  </content-section>
  <content-section
    :data="listData8"
    name="条件"
    :nameIndex="false"
    @addAction="addAction"
    @deleteAction="deleteAction"
  >
    <div class="test-box">
      <p>name属性用法：name="条件"</p>
      <p>nameIndex属性用法：:nameIndex="false"" => 不显示name index</p>
    </div>
    <div slot="title" class="title-slot">title-slot</div>
  </content-section>
</div>

<script>
export default {
  data() {
    return {
      listData1: [{type: '方向'}],
      listData2: [{type: '方向'}],
      listData3: [{type: '方向'}],
      listData4: [{type: '方向'}],
      listData5: [{type: '方向'}],
      listData6: [{type: '方向'}],
      listData7: [{type: '方向'}],
      listData8: [{type: 'disabled'}],
      listData: [],
      isSee: false,
      selectList: [
        { value: "1", label: "备选项1" },
        { value: "2", label: "备选项2" },
      ],
      defaultItemData: {
        eventSource: "",
        eventParentType: "",
        eventChildType: "",
        deviceNameList: "",
        remark: "",
        eventParentList: [],
        eventChildList: [],
      }
    }
  },
  methods: {
    addAction(index, data) {
      console.log('addAction:', index, data);
    },
    deleteAction(data) {
      console.log('deleteAction:',data);
    }
  },
  mounted() {
    this.defaultItemData = {
      ...this.defaultItemData,
      eventParentList: JSON.parse(JSON.stringify(this.selectList)),
      eventChildList: JSON.parse(JSON.stringify(this.selectList)),
    };
    this.listData = [JSON.parse(JSON.stringify(this.defaultItemData))];
  }
};
</script>
<style lang="scss" scoped>
.view-content-section {
  width: 700px;
  margin: 0 auto;
  &.flex-wrap {
    display: flex;
    flex-wrap: wrap;
    >div {
      width: 33.33%;
    }
  }
  .test-box {
    height: 100px;
    color: pink;
    text-align: center;
  }
  .split-gap {
    margin: 20px;
    color: red;
  }
  .title-slot {
    text-align: center;
    margin-bottom: 20px;
  }
  .footer-slot {
    text-align: center;
  }
}
.form-wrap {
  .form-item {
    margin: 10px auto;
    line-height: 28px;
    display: flex;
    .textarea {
      width: 72%;
    }
    .form-label {
      display: inline-block;
      text-align: right;
      width: 70px;
      margin-right: 15px;
    }
    .icon-ditu {
      margin-left: 5px;
      cursor: pointer;
    }
    .light-count {
      display: inline-block;
      width: 65%;
      vertical-align: middle;
    }
    .content-value {
      margin-left: 15px;
    }
    select {
      width: 200px;
      height: 28px;
    }
    input {
      width: 200px;
      height: 28px;
    }
  }
  .flex-form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .form-item-left {
      flex: 1;
      display: flex;
    }
    .form-item-right {
      flex: 1;
      .force-time {
        display: inline-block;
      }
      .time-unit {
        margin-left: 5px;
      }
    }
  }
}
</style>


### 基础示例代码

::: details 点击查看代码
```html
<template>
  <div class="view-content-section flex-wrap">
    <content-section
      :data="listData1"
      @addAction="addAction"
      @deleteAction="deleteAction"
    >
      <div class="test-box">
        <p>slot用法：title-slot</p>
        <p>slot用法：name-slot</p>
        <p>slot用法：footer-slot</p>
      </div>
      <div slot="title" class="title-slot">title-slot</div>
      <span slot="name">name-slot</span>
      <div slot="footer" class="footer-slot">footer-slot</div>
    </content-section>
    <content-section
      :data="listData2"
      :disabled="true"
      @addAction="addAction"
      @deleteAction="deleteAction"
    >
      <div class="test-box">disabled用法：disabled：true =》禁用模块框操作：true</div>
      <div slot="title" class="title-slot">title-slot</div>
    </content-section>
    <content-section
      :data="listData3"
      name="条件"
      :nameIndex="false"
      @addAction="addAction"
      @deleteAction="deleteAction"
    >
      <div class="test-box">
        <p>name属性用法：name="条件"</p>
        <p>nameIndex属性用法：:nameIndex="false"" => 不显示name index</p>
      </div>
      <div slot="title" class="title-slot">title-slot</div>
    </content-section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listData1: [{type: '方向'}],
      listData2: [{type: '方向'}],
      listData3: [{type: '方向'}]
    }
  },
  methods: {
    addAction(index, data) {
      console.log('addAction:', index, data);
    },
    deleteAction(data) {
      console.log('deleteAction:',data);
    },
  }
};
</script>
<style lang="scss" scoped>
.view-content-section {
  width: 700px;
  margin: 0 auto;
  &.flex-wrap {
    display: flex;
    flex-wrap: wrap;
    >div {
      width: 33.33%;
    }
  }
  .test-box {
    height: 100px;
    color: pink;
    text-align: center;
  }
  .split-gap {
    margin: 20px;
    color: red;
  }
  .title-slot {
    text-align: center;
    margin-bottom: 20px;
  }
  .footer-slot {
    text-align: center;
  }
}
</style>
```
::: 

### 位置方向示例
::: tip  
对于`模块名`、新增/删除按钮，我们提供 `6` 种不同位置的展示方式，可以通过以下完整示例来理解，选择你要的效果。分别是`上边`、`上左`、`上右`、`下边`、`下左`、`下右`。
:::
::: tip  
`namePlacement`属性决定`模块名`展示位置：`namePlacement`属性值为：方向-对齐位置；两个方向：`top`、`bottom`；三种对齐位置：`start`, `end`，默认为空。如`namePlacement="top-end"`，则模块title出现在模块框的上右测。
`iconPlacement`同`namePlacement`
:::

<div class="view-content-section flex-wrap">
  <content-section
    :data="listData1"
    namePlacement="top"
    iconPlacement="bottom"
  >
    <div class="test-box" slot-scope="{ node }">
      <p>类型：{{node.type}}</p>
      <p>namePlacement: 上边</p>
      <p>iconPlacement: 下边</p>
    </div>
  </content-section>
  <content-section
      :data="listData2"
      namePlacement="top-start"
      iconPlacement="bottom-start"
    >
    <div class="test-box" slot-scope="{ node }">
      <p>类型：{{node.type}}</p>
      <p>namePlacement: 上左</p>
      <p>iconPlacement: 下左</p>
    </div>
  </content-section>
  <content-section
    :data="listData3"
    namePlacement="top-end"
    iconPlacement="bottom-end"
  >
    <div class="test-box" slot-scope="{ node }">
      <p>类型：{{node.type}}</p>
      <p>namePlacement: 上右</p>
      <p>iconPlacement: 下右</p>
    </div>
  </content-section>
  <content-section
    :data="listData4"
    namePlacement="bottom"
    iconPlacement="top"
  >
    <div class="test-box" slot-scope="{ node }">
      <p>类型：{{node.type}}</p>
      <p>namePlacement: 下边</p>
      <p>iconPlacement: 上边</p>
    </div>
  </content-section>
  <content-section
    :data="listData5"
    namePlacement="bottom-start"
    iconPlacement="top-start"
  >
    <div class="test-box" slot-scope="{ node }">
      <p>类型：{{node.type}}</p>
      <p>namePlacement: 下右</p>
      <p>iconPlacement: 上右</p>
    </div>
  </content-section>
  <content-section
    :data="listData6"
    namePlacement="bottom-end"
    iconPlacement="top-end"
    name="sec"
  >
    <div class="test-box" slot-scope="{ node }">
      <p>类型：{{node.type}}</p>
      <p>namePlacement: 下右</p>
      <p>iconPlacement: 上右</p>
    </div>
  </content-section>
</div>

### 位置方向示例代码

::: details 点击查看代码
```html
<template>
  <div class="view-content-section flex-wrap">
  <content-section
    :data="listData1"
    namePlacement="top"
    iconPlacement="bottom"
  >
    <div class="test-box" slot-scope="{ node }">
      <p>类型：{{node.type}}</p>
      <p>namePlacement: 上边</p>
      <p>iconPlacement: 下边</p>
    </div>
  </content-section>
  <content-section
      :data="listData2"
      namePlacement="top-start"
      iconPlacement="bottom-start"
    >
    <div class="test-box" slot-scope="{ node }">
      <p>类型：{{node.type}}</p>
      <p>namePlacement: 上左</p>
      <p>iconPlacement: 下左</p>
    </div>
  </content-section>
  <content-section
    :data="listData3"
    namePlacement="top-end"
    iconPlacement="bottom-end"
  >
    <div class="test-box" slot-scope="{ node }">
      <p>类型：{{node.type}}</p>
      <p>namePlacement: 上右</p>
      <p>iconPlacement: 下右</p>
    </div>
  </content-section>
  <content-section
    :data="listData4"
    namePlacement="bottom"
    iconPlacement="top"
  >
    <div class="test-box" slot-scope="{ node }">
      <p>类型：{{node.type}}</p>
      <p>namePlacement: 下边</p>
      <p>iconPlacement: 上边</p>
    </div>
  </content-section>
  <content-section
    :data="listData5"
    namePlacement="bottom-start"
    iconPlacement="top-start"
  >
    <div class="test-box" slot-scope="{ node }">
      <p>类型：{{node.type}}</p>
      <p>namePlacement: 下右</p>
      <p>iconPlacement: 上右</p>
    </div>
  </content-section>
  <content-section
    :data="listData6"
    namePlacement="bottom-end"
    iconPlacement="top-end"
    name="sec"
  >
    <div class="test-box" slot-scope="{ node }">
      <p>类型：{{node.type}}</p>
      <p>namePlacement: 下右</p>
      <p>iconPlacement: 上右</p>
    </div>
  </content-section>
</template>
<script>
export default {
  data() {
    return {
      listData1: [{type: '方向'}],
      listData2: [{type: '方向'}],
      listData3: [{type: '方向'}],
      listData4: [{type: '方向'}],
      listData5: [{type: '方向'}],
      listData6: [{type: '方向'}]
    }
  },
  methods: {
    addAction(index, data) {
      console.log('addAction:', index, data);
    },
    deleteAction(data) {
      console.log('deleteAction:',data);
    },
  }
};
</script>
<style lang="scss" scoped>
.view-content-section {
  width: 700px;
  margin: 0 auto;
  &.flex-wrap {
    display: flex;
    flex-wrap: wrap;
    >div {
      width: 33.33%;
    }
  }
  .test-box {
    height: 100px;
    color: pink;
    text-align: center;
  }
  .split-gap {
    margin: 20px;
    color: red;
  }
  .title-slot {
    text-align: center;
    margin-bottom: 20px;
  }
  .footer-slot {
    text-align: center;
  }
}
</style>
```
::: 

### 复杂内容示例

::: tip
对于模块内容，使用默认插槽占位，可根据业务编写内容，若需要下拉选项等数据，可通过`defaultItemData`属性传递，新增时默认把改值作为`item数据`加到`模块列表data`中。也可以不传，直接在`addAction事件`中自定义修改模块列表`data对应项`数据。
:::
<div class="view-content-section">
  <content-section
    title="复杂内容示例"
    :data="listData"
    name="预警事件"
    @addAction="addAction"
    @deleteAction="deleteAction"
  >
    <div class="form-wrap" slot-scope="{ node }">
      <div class="form-item">
        <span class="form-label">事件来源</span>
        <select
          :disabled="isSee"
          v-model="node.eventSource"
          placeholder="请选择"
        >
          <option
            v-for="oItem in selectList"
            :key="oItem.value"
            :label="oItem.label"
            :value="oItem.value"
          ></option>
        </select>
      </div>
      <div class="form-item flex-form">
        <div class="form-item-left">
          <span class="form-label">事件大类</span>
          <select
            :disabled="isSee"
            v-model="node.eventParentType"
            placeholder="请选择"
          >
            <option
              v-for="oItem in node.eventParentList"
              :key="oItem.value"
              :label="oItem.label"
              :value="oItem.value"
            ></option>
          </select>
        </div>
        <div class="form-item-right">
          <span class="form-label">事件小类</span>
          <select
            :disabled="isSee"
            v-model="node.eventChildType"
            placeholder="请选择"
          >
            <option
              v-for="oItem in node.eventChildList"
              :key="oItem.value"
              :label="oItem.label"
              :value="oItem.value"
            ></option>
          </select>
        </div>
      </div>
      <div class="form-item">
        <span class="form-label">选择设备</span>
        <input
          class="textarea"
          type="textarea"
          disabled
          v-model="node.deviceNameList"
        />
        <span class="iconfont icon-ditu"></span>
      </div>
      <div class="form-item">
        <span class="form-label">备注</span>
        <input
          class="textarea"
          type="textarea"
          :disabled="isSee"
          v-model="node.remark"
        />
      </div>
    </div>
  </content-section>
</div>


### 复杂内容示例代码
::: details 点击查看代码
```html
<template>
  <div class="view-content-section">
    <content-section
      title="复杂内容示例"
      :data="listData"
      name="预警事件"
      @addAction="addAction"
      @deleteAction="deleteAction"
    >
      <div class="form-wrap" slot-scope="{ node }">
        <div class="form-item">
          <span class="form-label">事件来源</span>
          <select
            :disabled="isSee"
            v-model="node.eventSource"
            placeholder="请选择"
          >
            <option
              v-for="oItem in selectList"
              :key="oItem.value"
              :label="oItem.label"
              :value="oItem.value"
            ></option>
          </select>
        </div>
        <div class="form-item flex-form">
          <div class="form-item-left">
            <span class="form-label">事件大类</span>
            <select
              :disabled="isSee"
              v-model="node.eventParentType"
              placeholder="请选择"
            >
              <option
                v-for="oItem in node.eventParentList"
                :key="oItem.value"
                :label="oItem.label"
                :value="oItem.value"
              ></option>
            </select>
          </div>
          <div class="form-item-right">
            <span class="form-label">事件小类</span>
            <select
              :disabled="isSee"
              v-model="node.eventChildType"
              placeholder="请选择"
            >
              <option
                v-for="oItem in node.eventChildList"
                :key="oItem.value"
                :label="oItem.label"
                :value="oItem.value"
              ></option>
            </select>
          </div>
        </div>
        <div class="form-item">
          <span class="form-label">选择设备</span>
          <input
            class="textarea"
            type="textarea"
            disabled
            v-model="node.deviceNameList"
          />
          <span class="iconfont icon-ditu"></span>
        </div>
        <div class="form-item">
          <span class="form-label">备注</span>
          <input
            class="textarea"
            type="textarea"
            :disabled="isSee"
            v-model="node.remark"
          />
        </div>
      </div>
    </content-section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listData: [],
      isSee: false,
      selectList: [
        { value: "1", label: "备选项1" },
        { value: "2", label: "备选项2" },
      ],
      defaultItemData: {
        eventSource: "",
        eventParentType: "",
        eventChildType: "",
        deviceNameList: "",
        remark: "",
        eventParentList: [],
        eventChildList: [],
      }
    }
  },
  methods: {
    addAction(index, data) {
      console.log('addAction:', index, data);
    },
    deleteAction(data) {
      console.log('deleteAction:',data);
    }
  },
  mounted() {
    this.defaultItemData = {
      ...this.defaultItemData,
      eventParentList: JSON.parse(JSON.stringify(this.selectList)),
      eventChildList: JSON.parse(JSON.stringify(this.selectList)),
    };
    this.listData = [JSON.parse(JSON.stringify(this.defaultItemData))];
  }
};
</script>
<style lang="scss" scoped>
.view-content-section {
  width: 700px;
  margin: 0 auto;
  .test-box {
    height: 100px;
    color: pink;
    text-align: center;
  }
  .split-gap {
    margin: 20px;
    color: red;
  }
}
.form-wrap {
  .form-item {
    margin: 10px auto;
    line-height: 28px;
    display: flex;
    .textarea {
      width: 72%;
    }
    .form-label {
      display: inline-block;
      text-align: right;
      width: 70px;
      margin-right: 15px;
    }
    .icon-ditu {
      margin-left: 5px;
      cursor: pointer;
    }
    .light-count {
      display: inline-block;
      width: 65%;
      vertical-align: middle;
    }
    .content-value {
      margin-left: 15px;
    }
    select {
      width: 200px;
      height: 28px;
    }
    input {
      width: 200px;
      height: 28px;
    }
  }
  .flex-form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .form-item-left {
      flex: 1;
      display: flex;
    }
    .form-item-right {
      flex: 1;
      .force-time {
        display: inline-block;
      }
      .time-unit {
        margin-left: 5px;
      }
    }
  }
}
</style>

```
::: 
### Attributes

| 参数             | 说明              | 类型         | 是否必要  |   默认值   |  可选值/备注    |
| ---------        | ------------      | ----------- | -------- | ------     |------     |
| data             | 模块框列表数据     | Array       | true     | []         |     -      | 
| defaultItemData  | 模块框item默认数据 | Object      | false    | {}          |    -       | 
| title            | 模块框整体头部名称  | String/Slot | false    | -         |    -        | 
| name             | 单个模块框名称      | String/Slot | false    |  模块     |     -       | 
| nameIndex        |模块名称是否显示index| Boolean     | false    | true      |     -       | 
| namePlacement    | 模块名称位置方向    | String      | false    | -         |top/top-start/top-end/bottom/bottom-start/bottom-end| 
| iconPlacement    | 新增删除操作按钮位置方向 | String  | false    | -         | 同namePlacement |  
| addIcon          | 新增模块icon类名   | String       | false    | -         |  可传项目支持的图标类名 | 
| delIcon          | 删除模块icon类名   | String       | false    | -         |  可传项目支持的图标类名 | 
| disabled         | 是否可操作模块框   | Boolean       | false    | true      |  可传项目支持的图标类名 | 
| footer           | 模块框底部         | String/Slot  | false    | -         |           | 
