const
    SITE_NAME = "Jack Pet Supplies",
    SEPERATOR = " - ";

const CURRENCY_FORMATTER = new Intl.NumberFormat('en-gb', {
    style: 'currency',
    currency: "GBP"
});

export function formatPrice(price) {
    return CURRENCY_FORMATTER.format(price);
}

export function generatePageTitle(pageTitle = null) {
    return pageTitle == null
        ? SITE_NAME
        : [pageTitle, SITE_NAME].join(SEPERATOR);
}