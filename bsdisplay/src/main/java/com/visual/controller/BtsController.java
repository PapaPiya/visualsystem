package com.visual.controller;

import com.visual.controller.vo.CommonVO;
import com.visual.dto.BtsDTO;
import com.visual.controller.vo.RectAreaBtsVO;
import com.visual.model.Bts;
import com.visual.service.BtsService;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.geo.Point;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * Basestation查询Controller类（包括区域基站CRUD跟统计信息）
 */
@Controller
public class BtsController extends BaseController {

    @Resource
    private BtsService btsService;

    // 错误状态变量
    private static final int ERROR = -1;

    // 最大经度
    private static final int MAX_LON = 180;

    //最大纬度
    private static final int MAX_LAT = 90;

    //最小经度
    private static final int MIN_LON = -180;

    //最小纬度
    private static final int MIN_LAT = -90;

    /**
     * @param left   左边经度
     * @param bottom 底部维度
     * @param right  右边经度
     * @param top    上部维度
     * @return 返回RectAreaBtsVO对象数组
     */
    @ResponseBody
    @Cacheable(value = "getRectangleInfo")
    @RequestMapping(path = "/getRectangleInfo", method = RequestMethod.GET)
    public CommonVO getBtsInfo(@RequestParam(value = "left") String left,
                                    @RequestParam(value = "bottom") String bottom,
                                    @RequestParam(value = "right") String right,
                                    @RequestParam(value = "top") String top) {
        //参数验证
        RectAreaBtsVO rectAreaBtsVO = new RectAreaBtsVO();
        double leftPos, bottomPos, rightPos, topPos;
        try {
            leftPos = Double.valueOf(left.trim());
            bottomPos = Double.valueOf(bottom.trim());
            rightPos = Double.valueOf(right.trim());
            topPos = Double.valueOf(top.trim());
        } catch (NumberFormatException e) {
            rectAreaBtsVO.setRet(ERROR);
            rectAreaBtsVO.setMsg("输入非数字");
            return rectAreaBtsVO;
        }
        if (leftPos < MIN_LON || leftPos > MAX_LON || rightPos < MIN_LON || rightPos > MAX_LON) {
            rectAreaBtsVO.setRet(ERROR);
            rectAreaBtsVO.setMsg("经度范围不正确");
            return rectAreaBtsVO;
        }
        if (bottomPos < MIN_LAT || bottomPos > MAX_LAT || topPos < MIN_LAT || topPos > MAX_LAT) {
            rectAreaBtsVO.setRet(ERROR);
            rectAreaBtsVO.setMsg("纬度范围不正确");
            return rectAreaBtsVO;
        }
        //数据库查询
        Point lowLeft, upRight;
        List<BtsDTO> bslist;
        long startTime = System.currentTimeMillis();
        if (leftPos > rightPos) {
            // 左下经度大于右上时
            lowLeft = new Point(leftPos, bottomPos);
            upRight = new Point(MAX_LON, topPos);
            bslist = btsService.findBtsByLonAndLat(lowLeft, upRight);
            lowLeft = new Point(MIN_LON, bottomPos);
            upRight = new Point(rightPos, topPos);
            bslist.addAll(btsService.findBtsByLonAndLat(lowLeft, upRight));
        } else {
            lowLeft = new Point(leftPos, bottomPos);
            upRight = new Point(rightPos, topPos);
            bslist = btsService.findBtsByLonAndLat(lowLeft, upRight);
        }

        long endTime = System.currentTimeMillis();
        System.out.println("程序运行时间： " + (endTime - startTime) + "ms");
        if(bslist == null){
            return new CommonVO(1,"无数据");
        }
        rectAreaBtsVO.setBsInfo(bslist);

        return rectAreaBtsVO;
    }

    //未测试
    /**
     * 搜索基站
     */
    @ResponseBody
    @Cacheable(value = "searchBts")
    @RequestMapping(path = "/searchBts",method = RequestMethod.GET)
    public CommonVO searchBts(@RequestParam(value="mcc")Integer mcc,
                              @RequestParam(value="mnc",required = false,defaultValue = "-1")Integer mnc,
                              @RequestParam(value="lac",required = false,defaultValue = "-1")Integer lac,
                              @RequestParam(value="cellid",required = false,defaultValue = "-1")Integer cellid,
                              @RequestParam(value="limit",required = false,defaultValue = "10")Integer limit){
         //response.setDateHeader("expries",System.currentTimeMillis()+1000 * 3600 * 120);
        long start = System.currentTimeMillis();
        List<BtsDTO> list = btsService.findBtsByMcc(mcc,mnc,lac,cellid,limit);
        long end = System.currentTimeMillis();
        System.out.println("程序运行时间： " + (end - start) + "ms");
        if(list == null){
            return new CommonVO(1,"无数据");
        }
        //response.addHeader("searchBts?mcc="+mcc+"&mnc="+mnc+"&lac="+lac+"&cellid="+cellid+"&limit="+limit,commonVO.toString());
        return new RectAreaBtsVO(list);
    }

    //未测试
    /**
     * 搜索省区基站
     */
    @ResponseBody
    @RequestMapping(path = "/getBoundaryBts",method = RequestMethod.GET)
    public CommonVO getBoundaryBts(@RequestParam(value="name")String name,
                                   @RequestParam(value="limit",required = false,defaultValue = "10")Integer limit){
        long start = System.currentTimeMillis();
        List<BtsDTO> list = btsService.findBtsInBoundary(name);
        if(list == null){
            return new CommonVO(1,"name不正确");
        }
        long end = System.currentTimeMillis();
        System.out.println("程序运行时间： " + (end - start) + "ms");
        return new RectAreaBtsVO(list);
    }

    //未测试
    /**
     * 删除单个基站
     */
    @ResponseBody
    @RequestMapping(path = "/deleteBts", method = RequestMethod.POST)
    public CommonVO deleteBts(@RequestParam(value = "id") String id) {

        CommonVO commonVO = new CommonVO();
        Integer btsId;
        try{
            btsId = Integer.valueOf(id);
        }catch (NumberFormatException e) {
            commonVO.setRet(ERROR);
            commonVO.setMsg("id输入错误");
            return commonVO;
        }

        long startTime = System.currentTimeMillis();
        btsService.deleteBtsById(btsId);
        long endTime = System.currentTimeMillis();
        System.out.println("程序运行时间： " + (endTime - startTime) + "ms");
        return commonVO;
    }

    //未测试
    /**
     * 插入单个基站
     */
    @ResponseBody
    @RequestMapping(path = "/insertBts", method = RequestMethod.POST)
    public CommonVO insertBts(@RequestParam(value = "id") String btsId,
                              @RequestParam(value = "dataSource") String btsDataSource,
                              @RequestParam(value = "radioType") String btsRadioType,
                              @RequestParam(value = "mcc") String btsMcc,
                              @RequestParam(value = "mnc") String btsMnc,
                              @RequestParam(value = "lac") String btsLac,
                              @RequestParam(value = "cellid") String btsCellid,
                              @RequestParam(value = "lat") String btsLat,
                              @RequestParam(value = "lon") String btsLon,
                              @RequestParam(value = "range") String btsRange,
                              @RequestParam(value = "created") String btsCreated,
                              @RequestParam(value = "updated") String btsUpdated
                              ) {

        CommonVO commonVO = new CommonVO();
        Integer id;
        int dataSource, range, created, updated, mcc, mnc, lac, cellid,latInt,lonInt;
        double lat, lon;

        try{
            id = Integer.valueOf(btsId);
            dataSource = Integer.valueOf(btsDataSource);
            mcc = Integer.valueOf(btsMcc);
            mnc = Integer.valueOf(btsMnc);
            lac = Integer.valueOf(btsLac);
            cellid = Integer.valueOf(btsCellid);
            range = Integer.valueOf(btsRange) ;
            created = Integer.valueOf(btsCreated);
            updated = Integer.valueOf(btsUpdated);
            lat = Double.valueOf(btsLat);
            lon = Double.valueOf(btsLon);
            lonInt= (int) Math.floor(lon);
            latInt = (int) Math.floor(lat);

        }catch (NumberFormatException e) {
            commonVO.setRet(ERROR);
            commonVO.setMsg("参数有误");
            return commonVO;
        }

        long startTime = System.currentTimeMillis();
        Bts bts = new Bts(id, dataSource, btsRadioType, mcc, mnc, lac,
                cellid, lat, lon,  range, created, updated,latInt,lonInt);
        btsService.insertBts(bts);
        long endTime = System.currentTimeMillis();
        System.out.println("程序运行时间： " + (endTime - startTime) + "ms");
        return commonVO;
    }

    //未测试
    /**
     * 更新单个基站信息
     */
    @ResponseBody
    @RequestMapping(path = "/updateBts", method = RequestMethod.POST)
    public CommonVO updateBts(@RequestParam(value = "id") String btsId,
                              @RequestParam(value = "dataSource") String btsDataSource,
                              @RequestParam(value = "radioType") String btsRadioType,
                              @RequestParam(value = "mcc") String btsMcc,
                              @RequestParam(value = "mnc") String btsMnc,
                              @RequestParam(value = "lac") String btsLac,
                              @RequestParam(value = "cellid") String btsCellid,
                              @RequestParam(value = "lat") String btsLat,
                              @RequestParam(value = "lon") String btsLon,
                              @RequestParam(value = "range") String btsRange,
                              @RequestParam(value = "created") String btsCreated,
                              @RequestParam(value = "updated") String btsUpdated
    ) {

        CommonVO commonVO = new CommonVO();
        Integer id;
        int dataSource, range, created, updated, mcc, mnc, lac, cellid,latInt,lonInt;
        double lat, lon;

        try{
            id = Integer.valueOf(btsId);
            dataSource = Integer.valueOf(btsDataSource);
            mcc = Integer.valueOf(btsMcc);
            mnc = Integer.valueOf(btsMnc);
            lac = Integer.valueOf(btsLac);
            cellid = Integer.valueOf(btsCellid);
            range = Integer.valueOf(btsRange) ;
            created = Integer.valueOf(btsCreated);
            updated = Integer.valueOf(btsUpdated);
            lat = Double.valueOf(btsLat);
            lon = Double.valueOf(btsLon);
            lonInt= (int) Math.floor(lon);
            latInt = (int) Math.floor(lat);

        }catch (NumberFormatException e) {
            commonVO.setRet(ERROR);
            commonVO.setMsg("参数有误");
            return commonVO;
        }

        long startTime = System.currentTimeMillis();
        Bts bts = new Bts(id, dataSource, btsRadioType, mcc, mnc, lac,
                cellid, lat, lon,  range, created, updated,latInt,lonInt);
        btsService.updateBts(bts);
        long endTime = System.currentTimeMillis();
        System.out.println("程序运行时间： " + (endTime - startTime) + "ms");
        return commonVO;
    }

}
