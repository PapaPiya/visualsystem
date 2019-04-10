package com.visual.controller.vo;

import java.io.Serializable;

public class CommonVO implements Serializable{
    private static final long serialVersionUID = -7749518001598811923L;

    /**
     * @author sjc
     * @date 10:34
     * @Description Controller层通用返回对象
     */

    private int ret = 0;
    private String msg = "success";

    public CommonVO() {
    }

    public CommonVO(int ret) {
        this.ret = ret;
    }

    public CommonVO(int ret, String msg) {
        this.ret = ret;
        this.msg = msg;
    }

    public int getRet() {
        return ret;
    }

    public void setRet(int ret) {
        this.ret = ret;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    @Override
    public String toString() {
        return "CommonVO{" +
                "ret=" + ret +
                ", msg='" + msg + '\'' +
                '}';
    }
}
