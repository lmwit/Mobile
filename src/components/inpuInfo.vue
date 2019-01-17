<template>
    <div class="input-all">
        <label :for="name">{{ label }}</label>
        <input
            :type="type"
            :value="value"
            :placeholder="placeholder"
            :name="name"
            @input="input($event)"
        >
    </div>
</template>

<script>
export default {
    name: "inputInfo",
    props: {
        type:{
            type: String,
            default: "text"
        },
        name: String,
        value: String,
        placeholder: String,
        label: String
    },
    methods: {
        input (ev) {
            this.$emit('input', ev.target.value);
        }
    }
}
</script>

<style scoped>
    .input-all {
        width: 100%;
        height: 2rem;
        margin-top: 2rem;
    }
    .input-all label {
        width: 25%;
        display: inline-block;
        font-size: 1rem;
        padding: .5rem 0 .5rem .8rem;
        color: #e0e0e0;
    }
    .input-all input {
        width: 65%;
        display: inline-block;
        font-size: 1rem;
        /* border: none;
        outline: none; */
    }
</style>