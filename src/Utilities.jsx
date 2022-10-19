const 
    SITE_NAME = "Jack Pet Supplies",
    SEPERATOR = " - ";

export function generatePageTitle(pageTitle = null) {
    return pageTitle == null 
            ? SITE_NAME
            : [pageTitle, SITE_NAME].join(SEPERATOR);
}