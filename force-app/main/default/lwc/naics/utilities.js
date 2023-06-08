const cols = () => {
    return [
        {
            label:"Copy To Clipboard",
            type: 'button-icon',
            fixedWidth: 100,
            typeAttributes:
            {
                iconName: 'utility:copy_to_clipboard',
                name: 'copy',
                // iconClass: 'slds-icon-text-error'
            }
        },
        {
            label: 'Code',
            fieldName: 'code',
            type: 'text',
            editable: false,
            fixedWidth: 130,
            displayReadOnlyIcon: true,
        },
        {
            label: 'Index Description',
            fieldName: 'title',
            type: 'text',
            wrapText: true,
            editable: false,
            displayReadOnlyIcon: true,
        },
    ];
}

const copyTextToClipboard = (content) => {
    // Create an input field with the minimum size and place in a not visible part of the screen
    let tempTextAreaField = document.createElement('textarea');
    tempTextAreaField.style = 'position:fixed;top:-5rem;height:1px;width:10px;';

    // Assign the content we want to copy to the clipboard to the temporary text area field
    tempTextAreaField.value = content;

    // Append it to the body of the page
    document.body.appendChild(tempTextAreaField);

    // Select the content of the temporary markup field
    tempTextAreaField.select();

    // Run the copy function to put the content to the clipboard
    document.execCommand('copy');

    // Remove the temporary element from the DOM as it is no longer needed
    tempTextAreaField.remove();
}

export {
    cols,
    copyTextToClipboard
}