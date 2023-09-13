


export const processWorkItems = async (workList: ModelWorksItem[]): Promise<ModelWorksWrapper[]> => {
    let workWrappedList: ModelWorksWrapper[] = [];
    // let wrapper: ModelWorksWrapper[] = [];
    let worksMobileView: ModelWorksItem[] = [];
    let worksWebView: ModelWorksItem[] = [];
  
    workList.forEach(element => {
      if (element.viewType == 'mobile') {
        worksMobileView.push(element)
      } else {
        worksWebView.push(element)
      }
    });
  
  
    var counter = 0;
    var isLeft = true
  
    while ((worksMobileView.length > 0 || worksWebView.length > 0) && counter < 40) {
  
      var viewType = "web"
      if (workWrappedList.length % 2 == 0 && worksMobileView.length > 1) {
        viewType = "mobile"
        isLeft = true
      } else if (worksWebView.length == 0) {
        viewType = "mobile"
      }
  
      if (viewType == "web" && worksWebView.length > 0) {
        workWrappedList.push({
          id: worksWebView[0].id,
          isLeft: isLeft,
          viewType: viewType,
          items: [worksWebView.shift()!!]
        })
        isLeft = !isLeft
      } else if (viewType == "mobile" && worksMobileView.length > 1) {
        workWrappedList.push({
          id: worksMobileView[0].id,
          viewType: viewType,
          isLeft: isLeft,
          items: [worksMobileView.shift()!!, worksMobileView.shift()!!]
        })
      } else if (viewType == "mobile") {
        workWrappedList.push({
          id: worksMobileView[0].id,
          viewType: viewType,
          isLeft: isLeft,
          items: [worksMobileView.shift()!!]
        })
      }
  
      counter++;
  
    }
    // console.log("counter: ", counter);



  var workWrappedList2: ModelWorksWrapper[] = [{
    id: 2,
    isLeft: false,
    viewType: "web",
    items: [{
      id: 2,
      name: "Sneed: Main",
      company: "Sneed",
      colors: [{
        key: "primary",
        color: "#FFC494"

      }, {
        key: "back",
        color: "#FFA358"

      }],
      viewType: "web",
      urlPath:"",
      techStacks: [{ name: "Angular", src: "/assets/svg/tools/angular.svg" }],
      about: "Now you can browse privately, and other people who use this device won’t see your activity. However, downloads, bookmarks and reading list items will be saved.",
      imageUrl: "/assets/img/works/web.png",
      tags: [{ "name": "Motion Sensing", "color": "#FFF3C7" }, { "name": "Iot Technologies", "color": "#C7FFD7" }]
    }]
  }]

  return Promise.resolve(workWrappedList)


}


export interface ModelWorks {

    items: ModelWorksItem[]


}

export interface ModelWorksItem {

    id: number;
    name: string;
    about: string;
    imageUrl: string;
    tags: ModelTag[];
    company: string;
    techStacks: ModelTechStack[];
    colors: ModelColor[];
    viewType: 'mobile' | 'web';
    urlPath: string;


}


export interface ModelTechStack {
    name: string;
    src: string;
}

export interface ModelTag {
    name: string;
    color: string;
}

export interface ModelColor {
    key: string;
    color: string;
}

export interface ModelWorksWrapper {

    id: number;
    isLeft: boolean;
    viewType: 'mobile' | 'web';
    items: ModelWorksItem[]


}