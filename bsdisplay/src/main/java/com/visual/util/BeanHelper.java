package com.visual.util;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.BeanUtils;

/**
 * @author sjc
 * @date 2018/12/4 20:56
 * @Description 对象转换
 */
public class BeanHelper {

    private static Log logger = LogFactory.getLog(BeanHelper.class);

    public static void copyProperties(Object source, Object target, String[] ignoreProperties) {
        try {
            BeanUtils.copyProperties(source, target, ignoreProperties);

        } catch (Exception e) {
            logger.info(e.getMessage());
        }
    }

    public static void copyProperties(Object source, Object target) {
        try {
            BeanUtils.copyProperties(source, target);

        } catch (Exception e) {
            logger.info(e.getMessage());
        }
    }
}
