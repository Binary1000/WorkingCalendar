<template>
    <div class="table-header">
        <table class="table">
            <tr class="thead">
                <td class="my-col-1">日期</td>
                <td class="my-col-2">上午</td>
                <td class="my-col-3">下午</td>
                <td class="my-col-4">晚上</td>
                <td class="my-col-5">工作量(h)</td>
                <td class="my-col-6">工作量(d)</td>
                <td class="my-col-7">预估单价</td>
                <td class="my-col-8">总价</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
    table.table {
        width: 100%;
        margin-bottom: 0;
        font-weight: 800;
        font-size: 18px;
    }

    td.my-col-1{
        width: 10%;
    }

    td.my-col-2, td.my-col-3, td.my-col-4 {
        width: 16%;
    }

    td.my-col-5, td.my-col-6, td.my-col-7, td.my-col-8 {
        width: 8%;
    }

</style>
