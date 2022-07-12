import { FlatfileButton } from '@flatfile/react';

<FlatfileButton
    licenseKey="Your License Key"
    customer={{
        companyId: "ABC-123",
        companyName: "ABC Corp.",
        email: "john@abc123.com",
        name: "John Smith",
        userId: "12345"
    }}
    settings={{
        type: "Contact",
        fields: [
            { label: "Full Name", key: "name" },
            { label: "Email", key: "email" }
        ],
        managed: true
    }}
    onData={async (results) => {
        // Do something with the data here
        return "Done!";
    }}
>
    Import Contacts
</FlatfileButton>