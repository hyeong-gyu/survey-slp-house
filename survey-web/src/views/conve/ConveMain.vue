<template>
    <div class="container-md main-conve">
        <h2>우리같이 대화기술</h2>
        <div class="row mt-5">
            <div class="col-md info-box">
                <div class="form-floating">
                    <input type="text" class="form-control" id="conve-info-name" placeholder="name" value="홍길동">
                    <label for="conve-info-name">이름</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="icb-info-birth" placeholder="1999.01.01" value="1999.01.01">
                    <label for="icb-info-birth">생년월일</label>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <ConveTable />
        </div>
    </div>
</template>

<script>
import ConveTable from '@/components/conve/ConveTable';

export default {
    name: 'ConveMain',
    components: {
        ConveTable
    }
}
</script>

<style>
    .main-conve h2 {
        margin-top: 5rem;
        text-align: center;
    }

    .main-conve .info-box {
        display: flex;
        flex-basis: 50%;
        justify-content: space-evenly;
    }

    .main-conve .info-box .form-floating {
        flex-basis: 50%;
        justify-content: space-between;
        margin-left: 1%;
    }
    
    .main-conve .info-box .form-floating:first-child {
        margin-left: 0;
    }
</style>