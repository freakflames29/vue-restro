<template>
    <div>
       <h1>Hi {{ name }} and {{ password }}</h1>
    </div>
</template>

<script>
   
export default {
    name:'Inp_fields',
    props:{
        name:{
            type:String
        },
        password:{
            type:String
        }
    }
}
</script>
