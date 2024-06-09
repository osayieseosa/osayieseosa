export function formatDate(date:any) {
  return new Intl.DateTimeFormat("en-GB", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "Africa/Lagos",
  }).format(new Date(date));
}

export function formatBlogDate(date:any) {
  return new Intl.DateTimeFormat("en-GB", {
    month: "short",
    day: "numeric",
    timeZone: "Africa/Lagos",
  }).format(new Date(date));
}

export function sortBlogPostByDate(blogPostA: any, blogPostB:any) {
  return new Date(blogPostB.publishedOn).getTime() >
    new Date(blogPostA.publishedOn).getTime()
    ? 1
    : -1;
}