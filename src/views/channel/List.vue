<template>
    <t-content-header title="Channels">
        <t-button>New Channel</t-button>
    </t-content-header>
    <t-table :column="table.columns" :data="table.data">
        <template v-slot:title="slotProps">
            <h5>{{slotProps.item.title}}</h5>
            by <strong>{{slotProps.item.author}}</strong>
        </template>
    </t-table>
</template>
<script>

const columns = [
    {
        key: 'title',
        title: 'title',
        width: '50%',
        slot: 'title'
    },
    {
        key: 'status',
        title: 'status',
        width: '25%',
        // slot: 'status'
    },
    {
        key: 'lastUpdate',
        title: 'last update'
    }
]

const data = [
    {
        title: 'java',
        status: 'open',
        author: 'z3',
        lastUpdate: new Date()
    },
    {
        title: 'java',
        status: 'open',
        author: 'z3',
        lastUpdate: new Date()
    },
    {
        title: 'java',
        status: 'open',
        author: 'z3',
        lastUpdate: new Date()
    },
    {
        title: 'java',
        status: 'open',
        author: 'z3',
        lastUpdate: new Date()
    }
]

export default {
    data() {
        return {
            table: {
                columns: columns,
                data: data
            }
        }
    }
}
</script>