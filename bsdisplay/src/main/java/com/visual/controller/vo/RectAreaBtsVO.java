package com.visual.controller.vo;

import com.visual.dto.BtsDTO;

import java.io.Serializable;
import java.util.Collections;
import java.util.List;

/**
 * @author sjc
 * @date 2018/12/4 21:31
 * @Description 矩形区域基站信息
 */
public class RectAreaBtsVO extends CommonVO implements Serializable {

    private static final long serialVersionUID = -8618701752291661259L;
    private List<BtsDTO> bsInfo = Collections.EMPTY_LIST;

    public RectAreaBtsVO() {
    }

    public RectAreaBtsVO(List<BtsDTO> bsInfo) {
        this.bsInfo = bsInfo;
    }

    public List<BtsDTO> getBsInfo() {
        return bsInfo;
    }

    public void setBsInfo(List<BtsDTO> bsInfo) {
        this.bsInfo = bsInfo;
    }

    @Override
    public String toString() {
        return "RectAreaBtsVO{" +
                "bsInfo=" + bsInfo +
                '}';
    }
}
