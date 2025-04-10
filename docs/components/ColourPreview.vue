<template>
    <span 
        class="colour-preview"
        :style="{backgroundColor: color}"
        title="Colour Preview"
    </span>
</template>

<script>
    export default {
        props: {
            color: {
                type: String,
                required: true,
            },
        },
    };
</script>

<style scoped >
    .colour-preview {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 4px;
        border: 1px solid #00000044;
    }
</style>
    