const cols = () => {
    return [
        {
            label: 'Code',
            fieldName: 'code',
            type: 'text',
            editable: false,
            displayReadOnlyIcon: true,
        },
        {
            label: 'Index Description',
            fieldName: 'title',
            type: 'text',
            wrapText: true,
            editable: false,
            displayReadOnlyIcon: true,
        }
    ];
}

export {
    cols
}