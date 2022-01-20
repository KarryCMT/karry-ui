<!-- ka-button.vue -->
<template>
  <div class="ka-button">
    <button :class="[type, disabled ? 'disabled' : '']" :disabled="disabled">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'KaButton',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
$pColor: #333;
$sColor: #4acc9c;
$wColor: orange;
$dColor: red;
$disabledColor: gray;
.ka-button {
  margin-right: 10px;
  button {
    padding: 10px 20px;
    border: 2px solid $pColor;
    background: #fff;
    font-size: 16px;
    width: auto;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      box-shadow: 100px 0px 0px 0px $pColor inset;
      color: #fff;
    }
    &.success {
      border: 2px solid $sColor;
      color: $sColor;
      &:hover {
        box-shadow: 100px 0px 0px 0px $sColor inset;
        color: #fff;
      }
    }
    &.warning {
      border: 2px solid $wColor;
      color: $wColor;
      &:hover {
        box-shadow: 100px 0px 0px 0px $wColor inset;
        color: #fff;
      }
    }
    &.danger {
      border: 2px solid $dColor;
      color: $dColor;
      &:hover {
        box-shadow: 100px 0px 0px 0px $dColor inset;
        color: #fff;
      }
    }
    &.disabled {
      border: 2px solid $disabledColor;
      color: $disabledColor;
      cursor: not-allowed;
      &:hover {
        box-shadow: none;
        color: $disabledColor;
      }
    }
  }
}
</style>
