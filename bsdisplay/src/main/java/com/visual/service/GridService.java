package com.visual.service;

import com.visual.dto.GridAllDTO;
import com.visual.dto.GridDTO;
import com.visual.dto.GridWithMncDTO;
import com.visual.dto.GridWithTypeDTO;

import java.util.List;

public interface GridService {

    List<GridDTO> findGridByLevel(int level, double leftPos, double rightPos, double lowPos, double highPos);

    List<GridAllDTO> findGridThreeByLevel(int level, double leftPos, double rightPos, double lowPos, double highPos);

    List<GridWithMncDTO> findGridWithMncByLevel(int level, double leftPos, double rightPos, double lowPos, double highPos);

    List<GridWithTypeDTO> findGridWithTypeByLevel(int level, double leftPos, double rightPos, double lowPos, double highPos);
    //List<GridAllDTO> findGridOfChinaByLevel(int level, double leftPos, double rightPos, double lowPos, double highPos);

}
