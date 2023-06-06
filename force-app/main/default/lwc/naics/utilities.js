const cols = () => {
    return [
        {
            label: 'Code',
            fieldName: 'naics22',
            type: 'text',
            editable: false,
            displayReadOnlyIcon: true,
        },
        {
            label: 'NAICS',
            fieldName: 'index_desc',
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