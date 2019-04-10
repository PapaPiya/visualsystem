package com.visual.service.impl;

import com.visual.dao.*;
import com.visual.dto.GridDTO;
import com.visual.dto.GridAllDTO;
import com.visual.dto.GridWithMncDTO;
import com.visual.dto.GridWithTypeDTO;
import com.visual.service.GridService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class GridServiceImpl implements GridService {

    @Resource
    GridOneRepository oneLevel;

    @Resource
    GridTwoRepository twoLevel;

    @Resource
    GridThreeRepository threeLevel;

    @Resource
    GridFourRepository fourLevel;

    @Resource
    GridFiveRepository fiveLevel;

    @Resource
    GridSixRepository sixLevel;

    @Resource
    GridSevenRepository sevenLevel;

    @Resource
    GridEightRepository eightLevel;

    @Resource
    GridNineRepository nineLevel;

    @Resource
    GridTenRepository tenLevel;

    @Override
    public List<GridDTO> findGridByLevel(int level, double leftPos, double rightPos, double lowPos, double highPos){
        switch (level){
            case 1:return oneLevel.findByLevel(leftPos, rightPos, lowPos, highPos);
            case 2:return twoLevel.findByLevel(leftPos, rightPos, lowPos, highPos);
            case 3:return threeLevel.findByLevel(leftPos, rightPos, lowPos, highPos);
            case 4:return fourLevel.findByLevel(leftPos, rightPos, lowPos, highPos);
            case 5:return fiveLevel.findByLevel(leftPos, rightPos, lowPos, highPos);
            case 6:return sixLevel.findByLevel(leftPos, rightPos, lowPos, highPos);
            case 7:return sevenLevel.findByLevel(leftPos, rightPos, lowPos, highPos);
            case 8:return eightLevel.findByLevel(leftPos, rightPos, lowPos, highPos);
            case 9:return nineLevel.findByLevel(leftPos, rightPos, lowPos, highPos);
            case 10:return tenLevel.findByLevel(leftPos, rightPos, lowPos, highPos);
            default:return oneLevel.findByLevel(leftPos, rightPos, lowPos, highPos);
        }
    }

    @Override
    public List<GridAllDTO> findGridThreeByLevel(int level, double leftPos, double rightPos, double lowPos, double highPos){
        switch (level){
            case 2:return twoLevel.findByLevelAll(leftPos, rightPos, lowPos, highPos);
            case 3:return threeLevel.findByLevelAll(leftPos, rightPos, lowPos, highPos);
            case 4:return fourLevel.findByLevelAll(leftPos, rightPos, lowPos, highPos);
            case 5:return fiveLevel.findByLevelAll(leftPos, rightPos, lowPos, highPos);
            case 6:return sixLevel.findByLevelAll(leftPos, rightPos, lowPos, highPos);
            case 7:return sevenLevel.findByLevelAll(leftPos, rightPos, lowPos, highPos);
            case 8:return eightLevel.findByLevelAll(leftPos, rightPos, lowPos, highPos);
            case 9:return nineLevel.findByLevelAll(leftPos, rightPos, lowPos, highPos);
            case 10:return tenLevel.findByLevelAll(leftPos, rightPos, lowPos, highPos);
            default:return threeLevel.findByLevelAll(leftPos, rightPos, lowPos, highPos);
        }
    }

    @Override
    public List<GridWithMncDTO> findGridWithMncByLevel(int level, double leftPos, double rightPos, double lowPos, double highPos){
        switch (level){
            case 2:return twoLevel.findByTestWithMnc(leftPos, rightPos, lowPos, highPos);
            case 3:return threeLevel.findByTestWithMnc(leftPos, rightPos, lowPos, highPos);
            case 4:return fourLevel.findByTestWithMnc(leftPos, rightPos, lowPos, highPos);
            case 5:return fiveLevel.findByTestWithMnc(leftPos, rightPos, lowPos, highPos);
            case 6:return sixLevel.findByTestWithMnc(leftPos, rightPos, lowPos, highPos);
            case 7:return sevenLevel.findByTestWithMnc(leftPos, rightPos, lowPos, highPos);
            case 8:return eightLevel.findByTestWithMnc(leftPos, rightPos, lowPos, highPos);
            case 9:return nineLevel.findByTestWithMnc(leftPos, rightPos, lowPos, highPos);
            case 10:return tenLevel.findByTestWithMnc(leftPos, rightPos, lowPos, highPos);
            default:return threeLevel.findByTestWithMnc(leftPos, rightPos, lowPos, highPos);
        }
    }

    @Override
    public List<GridWithTypeDTO> findGridWithTypeByLevel(int level, double leftPos, double rightPos, double lowPos, double highPos){
        switch (level){
            case 2:return twoLevel.findByTestWithType(leftPos, rightPos, lowPos, highPos);
            case 3:return threeLevel.findByTestWithType(leftPos, rightPos, lowPos, highPos);
            case 4:return fourLevel.findByTestWithType(leftPos, rightPos, lowPos, highPos);
            case 5:return fiveLevel.findByTestWithType(leftPos, rightPos, lowPos, highPos);
            case 6:return sixLevel.findByTestWithType(leftPos, rightPos, lowPos, highPos);
            case 7:return sevenLevel.findByTestWithType(leftPos, rightPos, lowPos, highPos);
            case 8:return eightLevel.findByTestWithType(leftPos, rightPos, lowPos, highPos);
            case 9:return nineLevel.findByTestWithType(leftPos, rightPos, lowPos, highPos);
            case 10:return tenLevel.findByTestWithType(leftPos, rightPos, lowPos, highPos);
            default:return threeLevel.findByTestWithType(leftPos, rightPos, lowPos, highPos);
        }
    }
}
