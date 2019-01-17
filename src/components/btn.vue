<template>
        <button 
            class="btn"
            :class="{'is-disabled':disabled}"
            :type="type"
            :disabled="disabled"
            @click="$emit('click')"
        ><slot></slot></button>
</template>

<script>
export default {
    name: "btn",
    props: {
        type: String,
        disabled:{
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
    .btn {
        width: 100%;
        line-height: 1;
        cursor: pointer;
        color: #fff;
        background-color: #0e74af;
        border-color: #0e74af;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        border-radius: .25rem;
        padding: .8rem 1.2rem;
    }
    .is-disabled,
    .is-disabled:focus,
    .is-disabled:hover {
    color: #fff;
    background-color: #6c80b5;
    border-color: #6c80b5;
    cursor: not-allowed;
    pointer-events: none;
}
</style>