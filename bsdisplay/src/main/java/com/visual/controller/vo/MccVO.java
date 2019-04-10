package com.visual.controller.vo;

import com.visual.dto.MccDTO;

import java.io.Serializable;
import java.util.List;

public class MccVO extends CommonVO implements Serializable {

    private static final long serialVersionUID = -1844681220436385401L;
    List<MccDTO> mcc;

    public MccVO(List<MccDTO> mcc) {
        this.mcc = mcc;
    }

    public MccVO(int ret, List<MccDTO> mcc) {
        super(ret);
        this.mcc = mcc;
    }

    public MccVO(int ret, String msg, List<MccDTO> mcc) {
        super(ret, msg);
        this.mcc = mcc;
    }

    public List<MccDTO> getMcc() {
        return mcc;
    }

    @Override
    public String toString() {
        return "MccVO{" +
                "mcc=" + mcc +
                '}';
    }
}
