1. ✅ Modify primo_schema.sql to include the template table and its keys
2. ✅ Add the template table and keys to the database
3. ✅Create a templates page in the api section to export the content of the template table
4. Create a button in overview to mark a site as a template
5. Create modal with template_id/name/repo/description/preview_url/available/repo/screenshots mobile/tablet/desktop
6. Create a create template action
7. Create a delete template action
8. Create a update template action
9. Create a read template action
10. ✅Import the templates into the site builder
11. ✅Setup redeployments of site-builder and template-builder

Template JSON:
{"templates": [
    {
        "id": "",
        "name": "<name>",
        "repo": "<repo>",
        "price": "0",
        "price_id": "",
        "available": <true/false>,
        "description": {
            "html": "<optional template description in html>",
            "markdown": "<optional template description in mardown>"
        },
        "preview_url": "<url>",
        "screenshots": {
            "mobile": {
                "alt": "",
                "src": "<link-to-image>",
                "url": "<link-to-image>",
                "size": <size>
            },
            "tablet": {
                "alt": "",
                "src": ""<link-to-image>",
                "url": ""<link-to-image>",
                "size": <size>
            },
            "desktop": {
                "alt": "",
                "src": ""<link-to-image>",
                "url": ""<link-to-image>",
                "size": <size>
            }
        },
        "template_id": "<template id>"
    },
    ],
}
