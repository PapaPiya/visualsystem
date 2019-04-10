package com.visual.controller;

import com.visual.controller.vo.CommonVO;
import com.visual.controller.vo.MccVO;
import com.visual.dto.MccDTO;
import com.visual.service.MccService;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
public class MccController {

    @Resource
    MccService mccService;

    @ResponseBody
    @Cacheable(value = "getMcc")
    @RequestMapping(path = "/getMcc",method = RequestMethod.GET)
    public CommonVO getMcc(){
        //response.setDateHeader("expries",System.currentTimeMillis()+1000 * 3600 * 120);
        List<MccDTO> mccDTO = mccService.findMcc();
        if(mccDTO == null){
            return new CommonVO(1,"no data");
        }
        MccVO mccVO = new MccVO(mccDTO);
        //response.setHeader("getMcc"+"",commonVO.toString());
        return mccVO;
    }
}
