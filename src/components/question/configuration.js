export const inputControls=[
    {
        label:"Question",
        name:"que",
        tag:"textarea",
        required:true,
        criteria:["Required","Min5Char"]
    },
    {
        label:"Option 1",
        name:"opt1",
        tag:"input",
        type:"text",
        required:true,
        criteria:["Required"]
    },
    {
        label:"Option 2",
        name:"opt2",
        tag:"input",
        type:"text",
        required:true,
        criteria:["Required"]
    },
    {
        label:"Option 3",
        name:"opt3",
        tag:"input",
        type:"text",
        criteria:[]
    },
    {
        label:"Option 4",
        name:"opt4",
        tag:"input",
        type:"text",
        criteria:[]
    },
    {
        label:"Type",
        name:"type",
        type:"radio",
        tag:"input",
        options:["single","multiple"], 
        required:true ,
        criteria:["Required"]
    },
    {
        label:"Answer",
        name:"ans",
        tag:"select",
        options:["A","B","C","D","AB","AC","AD","BC","BD","CD","ABC","ABD","ACD","BCD","ABCD"],
        required:true,
        criteria:["Required"] 
    },
    
    


]