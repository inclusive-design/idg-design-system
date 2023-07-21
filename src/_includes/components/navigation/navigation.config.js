module.exports = {
    title: "Navigation",
    context: {
        items: [
            {
                title: "Insights"
            },
            {
                title: "Practices"
            },
            {
                title: "Techniques"
            },
            {
                title: "Activities"
            }
        ]
    },
    variants: [
        {
            title: "With Current Page Indicator",
            context: {
                items: [
                    {
                        title: "Insights",
                        current: true
                    },
                    {
                        title: "Practices"
                    },
                    {
                        title: "Techniques"
                    },
                    {
                        title: "Activities"
                    }
                ]
            }
        }
    ]
};
