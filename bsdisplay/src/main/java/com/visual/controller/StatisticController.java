package com.visual.controller;

import com.visual.controller.vo.CommonVO;
import com.visual.controller.vo.ProvinceVO;
import com.visual.controller.vo.StatisticVO;
import com.visual.dto.ProvinceDTO;
import com.visual.dto.StatisticDTO;
import com.visual.model.Statistic;
import com.visual.service.StatisticService;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
public class StatisticController extends BaseController{

    @Resource
    StatisticService statisticService;

    @ResponseBody
    @Cacheable(value = "getStatistics")
    @RequestMapping(path = "/getStatistics",method = RequestMethod.GET)
    public CommonVO getStatistics(){

        //response.setDateHeader("expries",System.currentTimeMillis()+1000 * 3600 * 120);
        long start = System.currentTimeMillis();
        List<Statistic> statistics = statisticService.findAllMcc();
        if(statistics == null){
            return new CommonVO(1,"no data");
        }
        StatisticVO statisticVO = new StatisticVO(statistics);
        long end = System.currentTimeMillis();
        System.out.println("程序运行时间： " + (end - start) + "ms");
        //response.setHeader("getStatistics"+"",commonVO.toString());
        return statisticVO;
    }

    @ResponseBody
    @Cacheable(value = "getProvinceData")
    @RequestMapping(path = "/getProvinceData",method = RequestMethod.GET)
    public CommonVO getProvinceData(){

        //response.setDateHeader("expries",System.currentTimeMillis()+1000 * 3600 * 120);
        long start = System.currentTimeMillis();
        List<ProvinceDTO> provinceDTOList =statisticService.findAllProvince();
        if(provinceDTOList == null){
            return new CommonVO(1,"no data");
        }
        ProvinceVO provinceVO = new ProvinceVO(provinceDTOList);
        long end = System.currentTimeMillis();
        System.out.println("程序运行时间： " + (end - start) + "ms");
        //response.setHeader("getProvinceData"+"",commonVO.toString());
        return provinceVO;
    }
}
