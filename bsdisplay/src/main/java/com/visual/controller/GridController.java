package com.visual.controller;

import com.visual.controller.vo.*;
import com.visual.dto.GridAllDTO;
import com.visual.dto.GridDTO;
import com.visual.dto.GridWithMncDTO;
import com.visual.dto.GridWithTypeDTO;
import com.visual.service.GridService;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
public class GridController extends BaseController{

    @Resource
    GridService gridService;

    @ResponseBody
    @Cacheable(value = "getGrid")
    @RequestMapping(path = "/getGrid",method = RequestMethod.GET)
    public CommonVO getGridInfo(@RequestParam(value="level",required = false,defaultValue = "2")Integer level,
                                @Param(value="left")String left,
                                @Param(value="right")String right,
                                @Param(value="low")String low,
                                @Param(value="high")String high,
                                @RequestParam(value="hasType",required = false,defaultValue = "0")Integer hasType,
                                @RequestParam(value="hasMnc",required = false,defaultValue = "0")Integer hasMnc){

        List<GridDTO> gridList;
        GridVO gridVO = new GridVO();
        double leftPos, lowPos, rightPos, highPos;
        try {
            leftPos = Double.valueOf(left.trim());
            lowPos = Double.valueOf(low.trim());
            rightPos = Double.valueOf(right.trim());
            highPos = Double.valueOf(high.trim());
        } catch (NumberFormatException e) {
            gridVO.setRet(1);
            gridVO.setMsg("输入非数字");
            return gridVO;
        }
        System.out.println(level);
        if(level >= 2){
            if(hasType == 1 && hasMnc == 1){
                List<GridAllDTO> grid;
                grid = gridService.findGridThreeByLevel(level, leftPos, rightPos, lowPos, highPos);
                if(grid == null){
                    return new CommonVO(1,"no data");
                }
                return new GridAllVO(grid);
            }
            if(hasType == 0 && hasMnc == 1){
                List<GridWithMncDTO> grid;
                grid = gridService.findGridWithMncByLevel(level, leftPos, rightPos, lowPos, highPos);
                if(grid == null){
                    return new CommonVO(1,"no data");
                }
                return new GridWithMncVO(grid);
            }
            if(hasType == 1 && hasMnc == 0){
                List<GridWithTypeDTO> grid;
                grid = gridService.findGridWithTypeByLevel(level, leftPos, rightPos, lowPos, highPos);
                if(grid == null){
                    return new CommonVO(1,"no data");
                }
                return new GridWithTypeVO(grid);
            }
            if(hasType == 0 && hasMnc == 0){
                List<GridDTO> grid;
                grid = gridService.findGridByLevel(level, leftPos, rightPos, lowPos, highPos);
                if(grid == null){
                    return new CommonVO(1,"no data");
                }
                return new GridVO(grid);
            }
        }else{
            long start = System.currentTimeMillis();
            List<GridDTO> grid;
            grid = gridService.findGridByLevel(level, leftPos, rightPos, lowPos, highPos);
            long end = System.currentTimeMillis();
            System.out.println("程序运行时间： " + (end - start) + "ms");
            if(grid == null){
                return new CommonVO(1,"no data");
            }
            return new GridVO(grid);
        }
        gridVO.setMsg("error");
        gridVO.setRet(1);
        return gridVO;
    }
}
