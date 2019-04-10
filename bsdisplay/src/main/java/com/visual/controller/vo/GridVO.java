package com.visual.controller.vo;

import com.visual.dto.GridDTO;

import java.io.Serializable;
import java.util.List;

public class GridVO extends CommonVO implements Serializable{

    private static final long serialVersionUID = -6536709618957146414L;

    private List<GridDTO> grid;

    public GridVO(){}

    public GridVO(List<GridDTO> grid){
        this.grid = grid;
    }

    public List<GridDTO> getGrid() {
        return grid;
    }

    public void setGrid(List<GridDTO> grid) {
        this.grid = grid;
    }

    @Override
    public String toString() {
        return "GridVO{" +
                "grid=" + grid +
                '}';
    }
}
