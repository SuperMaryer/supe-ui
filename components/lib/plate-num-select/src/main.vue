<template>
  <div class="s-plate-num-select">
    <input
      class="s-plate-num-select-short-input"
      v-model="province"
      @click.stop="provinceClick"
      @focus.stop="provinceClick"
      @change="provinceChange"
      style="width: 36px"
    />
    <input
      class="s-plate-num-select-short-input"
      v-model="alias"
      @click.stop="aliasClick"
      @focus.stop="aliasClick"
      @change="aliasChange"
      style="width: 36px"
    />
    <input
      v-model="plateNum"
      maxlength="6"
      @change="plateNumChange"
      @onchange="plateNumChange"
      style="width: 180px"
      clearable
    />
    <div class="s-plate-num-select-popup" v-if="provincePopupVisible" ref="provinceDom">
      <div class="s-plate-num-select-popup-flex-row">
        <div
          class="s-plate-num-select-popup-item"
          :class="province === item ? 'active' : ''"
          v-for="item in provinceObj.list1"
          @click.stop="selectProvince(item)"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
      <div class="s-plate-num-select-popup-flex-row">
        <div
          class="s-plate-num-select-popup-item"
          :class="province === item ? 'active' : ''"
          v-for="item in provinceObj.list2"
          @click.stop="selectProvince(item)"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
      <div class="s-plate-num-select-popup-flex-row">
        <div
          class="s-plate-num-select-popup-item"
          :class="province === item ? 'active' : ''"
          v-for="item in provinceObj.list3"
          @click="selectProvince(item)"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
      <div class="s-plate-num-select-popup-flex-row">
        <div
          class="s-plate-num-select-popup-item"
          :class="province === item ? 'active' : ''"
          v-for="item in provinceObj.list4"
          @click="selectProvince(item)"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="s-plate-num-select-popup" v-if="aliasPopupVisible" ref="aliasDom">
      <div class="s-plate-num-select-popup-flex-row">
        <div
          class="s-plate-num-select-popup-item"
          :class="alias === item ? 'active' : ''"
          v-for="item in aliasObj.list1"
          @click="selectAlias(item)"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
      <div class="s-plate-num-select-popup-flex-row">
        <div
          class="s-plate-num-select-popup-item"
          :class="alias === item ? 'active' : ''"
          v-for="item in aliasObj.list2"
          @click="selectAlias(item)"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
      <div class="s-plate-num-select-popup-flex-row">
        <div
          class="s-plate-num-select-popup-item"
          :class="alias === item ? 'active' : ''"
          v-for="item in aliasObj.list3"
          @click="selectAlias(item)"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupePlateNumSelect",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      provincePopupVisible: false,
      aliasPopupVisible: false,
      province: "",
      alias: "",
      plateNum: "",
      provinceObj: {
        list1: ["京", "津", "沪", "渝", "冀", "豫", "云", "辽", "黑", "湘"],
        list2: ["皖", "鲁", "新", "苏", "浙", "赣", "鄂", "桂", "甘", "晋"],
        list3: ["蒙", "陕", "吉", "闽", "贵", "粤", "青", "藏"],
        list4: ["川", "宁", "琼", "港", "澳", "台"],
      },
      aliasObj: {
        list1: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        list2: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        list3: ["Z", "X", "C", "V", "B", "N", "M"],
      },
    };
  },
  watch: {
    // licensePlate() {
      // this.$emit("input", this.licensePlate);
    // },
    value() {
      const list = this.value.split("");
      const province = list.length && list[0] || '';
      const alias = list.length && list[1] || '';

      if (this.totalProvince.includes(province)) {
        this.province = province;
      } else {
        this.province = "";
      }
      if (this.totalAlias.includes(alias)) {
        this.alias = alias;
      } else {
        this.alias = "";
      }
      this.plateNum = this.value.slice(2);
    },
  },
  computed: {
    licensePlate() {
      return this.province + this.alias + this.plateNum;
    },
    totalProvince() {
      return Object.values(this.provinceObj).reduce((pre, cur) => {
        return pre.concat(cur);
      }, []);
    },
    totalAlias() {
      return Object.values(this.aliasObj).reduce((pre, cur) => {
        return pre.concat(cur);
      }, []);
    },
  },
  methods: {
    provinceChange() {
      if (this.province && !this.totalProvince.includes(this.province)) {
        this.province = "";
        alert("请输入规范的首位车牌号");
      }
      if (!this.province) {
        this.alias = '';
        this.plateNum = '';
      }
      this.$emit("input", this.licensePlate);
    },
    aliasChange() {
      if (this.alias && !this.totalAlias.includes(this.alias)) {
        this.alias = "";
        alert("请输入规范的次位车牌号");
      }
      if (!this.alias) {
        this.plateNum = '';
      }
      this.$emit("input", this.licensePlate);
    },
    plateNumChange() {
      if (!this.province) {
        alert("请先选择首位车牌号");
        this.plateNum = "";
        return;
      }
      if (!this.alias) {
        alert("请先选择次位车牌号");
        this.plateNum = "";
        return;
      }

      // 剩余后面几位车牌号校验： 为英文字母或数字
      const plateNum = this.licensePlate.substr(2);
      let regx = /^[A-Za-z0-9]*$/;
      if (!regx.test(plateNum)) {
        alert("车牌号第三位开始仅支持输入英文字母或数字！");
        return;
      }

      this.plateNum = this.plateNum.toUpperCase();
      this.$emit("input", this.licensePlate);
    },
    provinceClick() {
      this.provincePopupVisible = true;
      this.aliasPopupVisible = false;
    },
    aliasClick() {
      this.aliasPopupVisible = true;
      this.provincePopupVisible = false;
    },
    selectProvince(value) {
      this.province = value;
      this.provincePopupVisible = false;
      this.$emit("input", this.licensePlate);
    },
    selectAlias(value) {
      if (!this.province) {
        alert("请先选择首位车牌号");
        this.alias = "";
      } else {
        this.alias = value;
      }
      this.aliasPopupVisible = false;
      this.$emit("input", this.licensePlate);
    },
    domClick(e) {
      const provinceDom = this.$refs.provinceDom;
      if (
        provinceDom &&
        (!provinceDom.contains(e.target) || provinceDom !== e.target)
      ) {
        this.provincePopupVisible = false;
      }

      const aliasDom = this.$refs.aliasDom;
      if (aliasDom && (!aliasDom.contains(e.target) || aliasDom !== e.target)) {
        this.aliasPopupVisible = false;
      }
    },
    validate() {
      if (!this.province) {
        return { isValidate: false, message: "首位车牌号为空！" };
      }
      if (!this.alias) {
        return { isValidate: false, message: "次位车牌号为空！" };
      }

      // 剩余后面几位车牌号校验： 为英文字母或数字
      const plateNum = this.licensePlate.substr(2);
      let regx = /^[A-Za-z0-9]*$/;
      if (!regx.test(plateNum)) {
        return { isValidate: false, message: "车牌号组合不规范！" };
      }
      return true;
    },
  },
  created() {},
  mounted() {
    window.addEventListener("click", this.domClick);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.domClick);
  },
};
</script>