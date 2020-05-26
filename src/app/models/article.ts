export interface IArticle {
    abstract: string,
    blog_name: string,
    byline: string,
    created_date: string,
    des_facet: [string],
    geo_facet: [string],
    headline: string,
    item_type: string,
    kicker: string,
    material_type_facet: string,
    multimedia: [{
        caption: string,
        copyright: string,
        format: string,
        height: number,
        subtype: string,
        type: string,
        url: string,
        width: number
        }],
    org_facet: string,
    per_facet: [string],
    published_date: string,
    related_urls: [{
        suggested_link_text: string,
        url: string
    }],
    section: string,
    short_url: string,
    source: string,
    subsection: string,
    thumbnail_standard: string,
    title: string,
    updated_date: string,
    url: string
}