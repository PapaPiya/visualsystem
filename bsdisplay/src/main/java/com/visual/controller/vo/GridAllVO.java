package com.visual.controller.vo;

import com.visual.dto.GridAllDTO;

import java.io.Serializable;
import java.util.List;

public class GridAllVO extends CommonVO implements Serializable{

    private static final long serialVersionUID = -9183602359269402246L;

    private List<GridAllDTO> grid;

    public GridAllVO(List<GridAllDTO> grid) {
        this.grid = grid;
    }

    public GridAllVO(int ret, List<GridAllDTO> grid) {
        super(ret);
        this.grid = grid;
    }

    public GridAllVO(int ret, String msg, List<GridAllDTO> grid) {
        super(ret, msg);
        this.grid = grid;
    }

    public void setGrid(List<GridAllDTO> grid) {
        this.grid = grid;
    }

    public List<GridAllDTO> getGrid() {
        return grid;
    }

    @Override
    public String toString() {
        return "GridAllVO{" +
                "grid=" + grid +
                '}';
    }
}
