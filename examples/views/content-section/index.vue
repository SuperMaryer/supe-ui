<template>
  <div class="view-content-section">

    <supe-content-section
      :data="testListSet[0]"
      namePlacement="top"
      iconPlacement="bottom"
      @addAction="addAction"
    >
      <div class="test-box">
        <p>测试namePlacement: 上边</p>
        <p>iconPlacement: 下边</p>
      </div>
    </supe-content-section>

    <div class="split-gap">
      --------------------------我是每个测试模块之间的分割线----------------------------
    </div>

    <supe-content-section
      :data="testListSet[1]"
      namePlacement="top-start"
      iconPlacement="bottom-start"
      @addAction="addAction"
    >
      <div class="test-box">
        <p>测试namePlacement: 上左</p>
        <p>iconPlacement: 下左</p>
      </div>
    </supe-content-section>

    <div class="split-gap">
      --------------------------我是每个测试模块之间的分割线----------------------------
    </div>

    <supe-content-section
      :data="testListSet[2]"
      namePlacement="top-end"
      iconPlacement="bottom-end"
      @addAction="addAction"
    >
      <div class="test-box">
        <p>测试namePlacement: 上右</p>
        <p>iconPlacement: 下右</p>
      </div>
    </supe-content-section>

    <div class="split-gap">
      --------------------------我是每个测试模块之间的分割线----------------------------
    </div>

    <supe-content-section
      :data="testListSet[4]"
      namePlacement="bottom"
      iconPlacement="top"
      @addAction="addAction"
    >
      <div class="test-box">
        <p>测试namePlacement: 下边</p>
        <p>iconPlacement: 上边</p>
      </div>
    </supe-content-section>

    <div class="split-gap">
      --------------------------我是每个测试模块之间的分割线----------------------------
    </div>

    <supe-content-section
      :data="testListSet[5]"
      namePlacement="bottom-start"
      iconPlacement="top-start"
      @addAction="addAction"
    >
      <div class="test-box">
        <p>测试namePlacement: 下右</p>
        <p>iconPlacement: 上右</p>
      </div>
    </supe-content-section>

    <div class="split-gap">
      --------------------------我是每个测试模块之间的分割线----------------------------
    </div>

    <supe-content-section
      :data="testListSet[6]"
      namePlacement="bottom-end"
      iconPlacement="top-end"
      @addAction="addAction"
    >
      <div class="test-box">
        <p>测试namePlacement: 下右</p>
        <p>iconPlacement: 上右</p>
      </div>
    </supe-content-section>

    <div class="split-gap">
      --------------------------我是每个测试模块之间的分割线----------------------------
    </div>

    <supe-content-section
      :data="testListSet[7]"
      @addAction="addAction"
    >
      <div class="test-box">test-slot</div>
      <div slot="title" class="title">测试title name footer插槽</div>
      <div slot="name" class="section-title">sTitle</div>
      <div slot="footer" class="footer">footer 分割</div>
    </supe-content-section>

    <div class="split-gap">
      --------------------------我是每个测试模块之间的分割线----------------------------
    </div>

    <supe-content-section
      title="测试 disabled"
      :data="testListSet[8]"
      :disabled="true"
      @addAction="addAction"
    >
      <div class="test-box">test-disabled :disabled="true"</div>
    </supe-content-section>

    <div class="split-gap">
      --------------------------我是每个测试模块之间的分割线----------------------------
    </div>

    <supe-content-section
      title="Content Section"
      :data="testListSet[9]"
      name="预警事件"
      :disabled="isSee"
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
            disabled
            v-model="node.remark"
          />
        </div>
      </div>
    </supe-content-section>
  </div>
</template>

<script>
import { cloneDeep } from "lodash";
export default {
  data() {
    return {
      testListSet: [],
      sectionList: [],
      name: "模块",
      isSee: false,

      selectList: [
        {
          value: "1",
          label: "备选项1",
        },
        {
          value: "2",
          label: "备选项2",
        },
        {
          value: "3",
          label: "备选项3",
        },
      ],
      defaultItemData: {
        eventSource: "",
        eventParentType: "",
        eventChildType: "",
        deviceIdList: [],
        deviceNameList: [],
        deviceList: [],
        eventParentList: [],
        eventChildList: [],
      },
    };
  },
  methods: {
    addAction(index, list) {
      console.log(index, list);
    },
    deleteAction(list) {
      console.log(list);
    },
  },
  mounted() {
    this.defaultItemData = {
      ...this.defaultItemData,
      deviceList: this.selectList,
      eventParentList: this.selectList,
      eventChildList: this.selectList,
    };

    this.sectionList = Array(1)
      .fill(null)
      .map(() => cloneDeep(this.defaultItemData));
    console.log(this.sectionList);

    for (let i = 0; i < 10; i++) {
      this.testListSet.push(cloneDeep(this.sectionList));
      
    }
  },
};
</script>
<style lang="scss" scoped>
.view-content-section {
  width: 700px;
  margin: 0 auto;
  .footer {
    text-align: center;
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
