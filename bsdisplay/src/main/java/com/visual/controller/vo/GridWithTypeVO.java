package com.visual.controller.vo;

import com.visual.dto.GridDTO;
import com.visual.dto.GridWithTypeDTO;

import java.io.Serializable;
import java.util.List;

public class GridWithTypeVO extends CommonVO implements Serializable{

    private static final long serialVersionUID = -5238945539336864578L;
    private List<GridWithTypeDTO> grid;

    public GridWithTypeVO(List<GridWithTypeDTO> grid) {
        this.grid = grid;
    }

    public GridWithTypeVO(int ret, List<GridWithTypeDTO> grid) {
        super(ret);
        this.grid = grid;
    }

    public GridWithTypeVO(int ret, String msg, List<GridWithTypeDTO> grid) {
        super(ret, msg);
        this.grid = grid;
    }

    public List<GridWithTypeDTO> getGrid() {
        return grid;
    }

    @Override
    public String toString() {
        return "GridWithTypeVO{" +
                "grid=" + grid +
                '}';
    }
}
