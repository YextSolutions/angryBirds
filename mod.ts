



export function myCustomDataSource(inputString: string): string {
    const inputJson = JSON.parse(inputString)
//    const pageToken = inputJson["pageToken"]
    
    let requestUrl = 'https://www.angrybirds.com/wp-json/wp/v2/posts'
//    if (pageToken != null) {
//       requestUrl = `${requestUrl}&pagination_token=${pageToken}`
//    }

    const response = await fetch(requestUrl).then(response => response.json())
//  const nextPageToken = response["meta"]["next_token"]
    const outputString = JSON.stringify({"data": response})

    return outputString;
}


//"nextPageToken": nextPageToken (added to const nextPageToken line)