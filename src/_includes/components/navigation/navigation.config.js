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
            title: "Current Page - Insights",
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
        },
        {
            title: "Current Page - Practices",
            context: {
                items: [
                    {
                        title: "Insights"
                    },
                    {
                        title: "Practices",
                        current: true
                    },
                    {
                        title: "Techniques"
                    },
                    {
                        title: "Activities"
                    }
                ]
            }
        },
        {
            title: "Current Page - Techniques",
            context: {
                items: [
                    {
                        title: "Insights"
                    },
                    {
                        title: "Practices"
                    },
                    {
                        title: "Techniques",
                        current: true
                    },
                    {
                        title: "Activities"
                    }
                ]
            }
        },
        {
            title: "Current Page - Activities",
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
                        title: "Activities",
                        current: true
                    }
                ]
            }
        }
    ]
};
