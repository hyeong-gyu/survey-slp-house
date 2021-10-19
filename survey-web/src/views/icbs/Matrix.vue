<template>
    <div class="container-md">
        <div class="px-4">
            <div class="info-wrap row gx-5 mt-5">
                <div class="col">
                    <div class="p-3 border-bottom">
                        <i class="bi bi-person-circle"></i>
                        <span>{{ icb.name }}</span>
                    </div>
                </div>
                <div class="col">
                    <div class="p-3 border-bottom">
                        <i class="bi bi-heart-half"></i>
                        <span>{{ icb.birth }}</span>
                    </div>
                </div>
                <div class="col">
                    <div class="p-3 border-bottom">
                        <i class="bi bi-file-earmark-bar-graph"></i>
                        <span>{{ icb.matrix }} 단계</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Stage Compontent -->
        <Stage class="px-4 mt-5" />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Stage from '@/components/Stage.vue';

export default {
    name: 'Matrix',
    components: {
        Stage
    },
    computed: {
        ...mapState(['icb'])
    }
}
</script>

<style scoped>

    .info-wrap i:before {
        vertical-align: middle;
        font-size: 1.5rem;
    }

    .info-wrap span {
        display: inline-block;
        margin-left: 0.4rem;
        vertical-align: middle;
        line-height: 100%;
    }
</style>