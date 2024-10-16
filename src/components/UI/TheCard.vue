<template>
    <div class="card">
        <div v-if="imgURL" class="card-img__wrapper">
            <img :src="imgURL" :alt="title" class="card-img">
        </div>
        <span class="card-name">{{name}}</span>
        <span class="card-title">{{title}}</span>
        <div class="card-body">

           <slot name="body"></slot>
           <router-link v-if="link" :to="link" style="display: block; margin: 2em auto;">See more</router-link>

           
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        imgURL: {
            type: String
        },
        link: {
            type: String
        }
    
    }
}
</script>