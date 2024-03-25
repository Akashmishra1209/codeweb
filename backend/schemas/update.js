export default {
    name: 'update',
    type: 'document',
    title: 'Update',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'desc',
            type: 'string',
            title: 'Description'
        },
        {
            title: 'Created  At',
            name: 'createdAt',
            type: 'datetime',
        }
    ]
}