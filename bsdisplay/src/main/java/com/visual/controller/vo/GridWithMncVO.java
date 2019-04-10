package com.visual.controller.vo;

import com.visual.dto.GridDTO;
import com.visual.dto.GridWithMncDTO;

import java.io.Serializable;
import java.util.List;

public class GridWithMncVO extends CommonVO implements Serializable{

    private static final long serialVersionUID = -5158830605335080349L;

    private List<GridWithMncDTO> grid;

    public GridWithMncVO(List<GridWithMncDTO> grid) {
        this.grid = grid;
    }

    public GridWithMncVO(int ret, List<GridWithMncDTO> grid) {
        super(ret);
        this.grid = grid;
    }

    public GridWithMncVO(int ret, String msg, List<GridWithMncDTO> grid) {
        super(ret, msg);
        this.grid = grid;
    }

    public List<GridWithMncDTO> getGrid() {
        return grid;
    }

    @Override
    public String toString() {
        return "GridWithMncVO{" +
                "grid=" + grid +
                '}';
    }
}
