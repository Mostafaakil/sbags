$(function()
{
    var mainitems = $("#main ul").children("li"),
        totalitems = mainitems.length,
        oppenindex = 1,
        
        init = function()
                {
                travail();
                clik_button();
                    
                    if(ValidIndex(oppenindex))
                        {
                         animer(mainitems.eq(oppenindex), true, 500); 
                        };
                };
        travail = function()
                {
                    mainitems.children(".images").click(function()
                    {
                        var new_index = $(this).parent().index(), item = mainitems.eq(new_index);
                        if(oppenindex == new_index)
                            {
                               animer(item, false, 250);
                                oppenindex = -1;
                            }
                        else
                            {
                                if(ValidIndex(new_index))
                                    {
                                       animer(mainitems.eq(oppenindex), false, 250);
                                        oppenindex = new_index;
                                        animer(item, true, 250)
                                    }
                            }
                        
                    });
                
                },
        
        ValidIndex = function(indexchek)
                {
                    return (indexchek >= 0) && (indexchek < totalitems);
                }
    
        animer = function(item, toopen, speed)
                {
                    var colorimage = item.find(".col"),
                    itemparam = toopen ? {width: "420px"}:{width: "140px"},
                    colorimageparam = toopen ? {left: "0px"}: {left: "140px"};
                    colorimage.animate(colorimageparam, speed);
                        item.animate(itemparam,speed);
                    }
    
    
    clik_button = function()
    {
        $(".button").click(function()
        {
           newindex = $(this).index(), item = mainitems.eq(newindex);
            if(oppenindex == newindex)
                            {
                               animer(item, false, 250);
                                oppenindex = -1;
                            }
            else
                            {
                                if(ValidIndex(newindex))
                                    {
                                       animer(mainitems.eq(oppenindex), false, 250);
                                        oppenindex = newindex;
                                        animer(item, true, 250)
                                    }
                            }
        });
    }
    
    init();
});