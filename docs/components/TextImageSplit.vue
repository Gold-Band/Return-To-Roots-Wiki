<template>
    <div style="display: flex; align-items: center;">
        <div style="flex: auto; padding-right: 1rem;">
            <p>{{ text }}</p>
        </div>
        <div style="flex: 0; text-align: center;">
            <img :src="imagePath" :alt="imageAlt" :style="{ width: imageWidth, height: 'auto' }">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                required: true,
            },
            imagePath: {
                type: String,
                required: true,
            },
            imageAlt: {
                type: String,
                required: true,
            },
            imageWidth: {
                type: String,
                default: '100%',
            },
        },
    };
</script>